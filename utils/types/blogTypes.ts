export type BlogBucketType = {
  attachment: string;
  blogId: number | null;
  created_at: string;
  id: number;
  mediaType: string;
  order: number;
};

export type BlogType = {
  id: number;
  created_at: string;
  post: string;
  BlogBucket: BlogBucketType[];
};
