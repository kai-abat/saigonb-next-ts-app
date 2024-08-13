'use server';

import { revalidatePath } from 'next/cache';
import {
  BucketSchemaDB,
  PostSchemaDB,
  PostSchemaDBUpdate
} from '../types/mongodbSchema';
import { ErrorReturnType } from '../types/restAPITypes';
import { getSignedUrl } from './AWSS3Action';
import { State } from './menuActions';
import { computeSHA256 } from '@/utils/Helper';

export type PostActionReturnType =
  | {
      success: PostSchemaDBUpdate[];
      failure?: undefined;
    }
  | {
      success?: undefined;
      failure: { message: string };
    };

export const getPost = async (): Promise<PostActionReturnType> => {
  const url = process.env.MONGODB_URL!;
  let finalData: PostActionReturnType;

  try {
    const res = await fetch(`${url}/api/posts`, { next: { revalidate: 60 } });
    const data: PostSchemaDBUpdate[] = await res.json();
    finalData = {
      success: data
    };

    // console.log(data);
  } catch (error: any) {
    // console.log(error.message);
    finalData = {
      failure: { message: 'Error fetching post data from the server' }
    };
  }
  return finalData;
};

interface SavePostMedia {
  file: File;
  order: number;
}

interface AWSSignedUrlObject {
  url: string;
  file: File;
  order: number;
}

export const savePost = async (formData: FormData): Promise<State> => {
  console.log('formData', formData);

  const description = formData.get('description') as string;
  const mediaTotal = Number(formData.get('media-total'));

  console.log('description', description);
  console.log('mediaTotal', mediaTotal);

  let media: SavePostMedia[] = [];

  if (mediaTotal > 0) {
    for (let i = 0; i < mediaTotal; i++) {
      const file = formData.get(`media-file-${i}`) as File;
      const order = Number(formData.get(`media-order-${i}`));
      if (file && order) {
        const currentMedia: SavePostMedia = {
          file: file,
          order: order
        };
        media.push(currentMedia);
      }
    }
  }
  console.log('media:', media);

  // Process to upload file to AWS S3
  // 1. Get all files signed url if fail then return error
  const signedUrlObject: AWSSignedUrlObject[] = [];
  await Promise.all(
    media.map(async data => {
      const checkSum = await computeSHA256(data.file);
      const signedUrlResult = await getSignedUrl(
        data.file.name,
        data.file.type,
        data.file.size,
        checkSum,
        true
      );
      if (signedUrlResult.failure) {
        return {
          status: 'error',
          message: `${signedUrlResult.failure.message}`
        };
      }
      const url = signedUrlResult.success.url;
      const object: AWSSignedUrlObject = {
        file: data.file,
        order: data.order,
        url: url
      };
      signedUrlObject.push(object);
    })
  );

  // 2. If all files signed url are ok then proceed to upload
  let bucketValue: BucketSchemaDB[] = [];
  await Promise.all(
    signedUrlObject.map(async object => {
      console.log('AWS S3 Signed URL:', object.url);

      // Upload to AWS S3
      const res = await fetch(object.url, {
        method: 'PUT',
        body: object.file,
        headers: {
          'Content-Type': object.file.type
        }
      });

      // Setup BucketSchemaDB
      bucketValue.push({
        attachment: object.url.split('?')[0],
        mediaType: object.file.type,
        order: object.order
      });
    })
  );

  // Saving to database
  const postDBValue: PostSchemaDB = {
    post: description,
    bucket: bucketValue
  };
  // Saving to MongoDB REST API
  const dbUrl = 'http://localhost:3001/api/posts';

  console.log('Saving to MongoDB REST API');

  try {
    const res = await fetch(dbUrl, {
      method: 'POST',
      body: JSON.stringify(postDBValue),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  console.log('Done saving to MongoDB REST API');

  revalidatePath('/posts');

  return {
    status: 'success',
    message: `Successfully saved post!`
  };
};
