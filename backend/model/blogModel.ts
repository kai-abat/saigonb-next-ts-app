'use server';
import { createSupabaseServerClient } from '@/utils/supabase/server';
import { BlogType } from '@/utils/types/blogTypes';

export const getAllBlog = async (): Promise<BlogType[] | null> => {
  const supabase = createSupabaseServerClient();
  const { data: blog, error } = await supabase
    .from('Blog')
    .select('*, BlogBucket(*)');

  return blog;
};
