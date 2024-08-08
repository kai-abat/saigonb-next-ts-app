'use server';

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { getUserData } from '../services/UserAPI';

export type State =
  | {
      status: 'success';
      message: string;
    }
  | {
      status: 'error';
      message: string;
      errors?: Array<{
        path: string;
        message: string;
      }>;
    }
  | null;

const s3 = new S3Client({
  region: process.env.AWS_BUCKET_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }
});

export const postAction = async (
  fileObjectURL: string[],
  state: State,
  formData: FormData
): Promise<State> => {
  try {
    console.log('postAction executed');
    // we're gonna put a delay in here to simulate some kind of data processing like persisting data
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('postAction formData:', formData);
    console.log('postAction fileObjectURL:', fileObjectURL);

    // auth
    const userData = await getUserData();
    if (!userData) {
      console.log('Not authenticated');
      return {
        status: 'success',
        message: `Not authenticated`
      };
    }

    // AWS S3 bucket
    const putObjectCommand = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: 'test-file'
      // Key: userData.id
      // ContentType: 'image/png'
    });

    // create a signed url
    const signedUrl = await getSignedUrl(s3, putObjectCommand, {
      expiresIn: 60
    });

    // upload the file
    // await fetch(signedUrl, {
    //   method: 'PUT',
    //   body: file
    // });

    console.log(signedUrl);

    return {
      status: 'success',
      message: `Post is in development mode...`
    };
  } catch (error: any) {
    return {
      status: 'error',
      message: 'Something went wrong. Please try again.',
      errors: [{ path: error.name, message: error.message }]
    };
  }
};

export const postAction2 = async (
  mediaFiles: File[],
  state: State,
  formData: FormData
): Promise<State> => {
  try {
    console.log('postAction executed');
    // we're gonna put a delay in here to simulate some kind of data processing like persisting data
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('postAction x:', mediaFiles);
    console.log('postAction formData:', formData);
    return {
      status: 'success',
      message: `Post is in development mode...`
    };
  } catch (error: any) {
    return {
      status: 'error',
      message: 'Something went wrong. Please try again.',
      errors: [{ path: error.name, message: error.message }]
    };
  }
};
