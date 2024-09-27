export declare interface BucketSchemaDB {
  attachment: string;
  mediaType: string;
  order: number;
}

export declare interface PostSchemaDB {
  post: string;
  bucket: BucketSchemaDB[];
}

export declare interface BucketSchemaDBUpdate {
  _id: string;
  attachment: string;
  mediaType: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export declare interface PostSchemaDBUpdate {
  _id: string;
  post: string;
  bucket: BucketSchemaDBUpdate[];
  createdAt: string;
  updatedAt: string;
}
