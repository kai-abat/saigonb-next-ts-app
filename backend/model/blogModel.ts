import { createSupabaseServerClient } from '@/utils/supabase/server';
import { BlogType } from '@/utils/types/blogTypes';
import { BiLogIn } from 'react-icons/bi';

const supabase = createSupabaseServerClient();

export const getAllBlog = async (): Promise<BlogType[] | null> => {
  const { data: blog, error } = await supabase
    .from('Blog')
    .select('*, BlogBucket(*)');

  return blog;
};
