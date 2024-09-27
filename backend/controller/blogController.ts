import { getAllBlog } from '../model/blogModel';
import { BlogType } from '@/utils/types/blogTypes';

export const fetchAllBlog = async (): Promise<null | BlogType[]> => {
  return await getAllBlog();
};
