export declare interface BucketSchemaDB {
  attachment: string;
  mediaType: string;
  order: Number;
}

export declare interface PostSchemaDB {
  post: string;
  bucket: BucketSchemaDB[];
}
