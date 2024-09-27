import { createSupabaseServerClient } from '../supabase/server';
import {
  BucketSchemaDBUpdate,
  PostSchemaDB,
  PostSchemaDBUpdate
} from '../types/mongodbSchema';
import { Database } from '../types/supabase';

export const saveBlog = async (
  blogId: number | undefined,
  postDBValue: PostSchemaDB
) => {
  const supabase = createSupabaseServerClient();

  let blog: Database['public']['Tables']['Blog']['Insert'] = {
    post: postDBValue.post
  };

  console.log('saveBlog blog:', blog);

  let query;
  if (!blogId) {
    query = supabase.from('Blog').insert(blog);
  } else {
    query = supabase.from('Blog').update(blog).eq('id', blogId);
  }

  const { data } = await query.select().single();
  console.log('Successfully inserted Blog:', data);

  // new blog
  const bucket = postDBValue.bucket;
  if (!blogId && data?.id) {
    blogId = data.id;

    // insert each blog bucket
    const savedBlogBucket = await Promise.all(
      bucket.map(async b => {
        let blogBucket: Database['public']['Tables']['BlogBucket']['Insert'];
        blogBucket = {
          attachment: b.attachment,
          mediaType: b.mediaType,
          blogId: blogId,
          order: b.order
        };

        let query2 = supabase.from('BlogBucket').insert(blogBucket);
        const { data } = await query2.select().single();

        return data;
      })
    );

    console.log('Successfully inserted BlogBucket:', savedBlogBucket);
  }
};

export const getBlogAll = async () => {
  let blog: PostSchemaDBUpdate[];
  let bucket: BucketSchemaDBUpdate[];

  const supabase = createSupabaseServerClient();

  supabase.from('BlogBucket').select('*');
};
