'use server';

import { getUserData } from '../services/UserAPI';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl as awsGetSignedUrl } from '@aws-sdk/s3-request-presigner';
import crypto from 'crypto';

// Node
const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString('hex');

type AWSS3ActionResult =
  | {
      failure: {
        message: string;
      };
      success?: undefined;
    }
  | {
      success: {
        url: string;
      };
      failure?: undefined;
    };

type AWSS3ActionValidationResult =
  | {
      failure: {
        message: string;
      };
      success?: undefined;
    }
  | {
      success: {
        message: string;
      };
      failure?: undefined;
    };

const allowedFileTypes = [
  'image/png',
  'image/jpeg',
  'image/webp',
  'video/mp4',
  'video/webm'
];

const maxFileSize = 1024 * 1024 + 10; // 10MB

const s3 = new S3Client({
  region: process.env.AWS_BUCKET_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }
});

export const validateRequiredS3Data = async (
  type: string,
  size: number
): Promise<AWSS3ActionValidationResult> => {
  // check auth
  const userData = await getUserData();

  if (!userData) {
    console.log('Not authenticated');
    return {
      failure: { message: 'Not authenticated, Please sign in first' }
    };
  }

  // check allowed file type
  if (!allowedFileTypes.includes(type)) {
    return {
      failure: { message: 'Invalid Media File Type' }
    };
  }
  // check max file size
  if (size > maxFileSize) {
    return {
      failure: {
        message: 'Selected Media File is too large. (Maximum of 10MB only)'
      }
    };
  }

  return {
    success: {
      message: 'No Problem'
    }
  };
};

export const getSignedUrl = async (
  fileName: string,
  type: string,
  size: number,
  checksum: string,
  skipValidation: boolean
): Promise<AWSS3ActionResult> => {
  const userData = await getUserData();

  // check auth
  if (!userData) {
    console.log('Not authenticated');
    return {
      failure: { message: 'Not authenticated, Please sign in first' }
    };
  }

  if (!skipValidation) {
    // check allowed file type
    if (!allowedFileTypes.includes(type)) {
      return {
        failure: { message: 'Invalid Media File Type' }
      };
    }
    // check max file size
    if (size > maxFileSize) {
      return {
        failure: {
          message: 'Selected Media File is too large. (Maximum of 10MB only)'
        }
      };
    }
  }

  // AWS S3 bucket
  const putObjectCommand = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: generateFileName(),
    ContentType: type,
    ContentLength: size,
    ChecksumSHA256: checksum,
    Metadata: {
      userId: userData.id,
      userName: `${userData.lastName} ,${userData.firstName}`,
      email: userData.email
    }
  });

  // create a signed url
  const signedUrl = await awsGetSignedUrl(s3, putObjectCommand, {
    expiresIn: 60
  });

  return {
    success: { url: signedUrl }
  };
};
