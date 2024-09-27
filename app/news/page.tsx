import { fetchAllBlog } from '@/backend/controller/blogController';
import NewPosts from '@/components/posts/NewPosts';
import Posts from '@/components/posts/Posts';
import Container from '@/components/ui/Container';
import { getUserData } from '@/utils/services/UserAPI';
import { redirect } from 'next/navigation';

const PostPage = async () => {
  const user = await getUserData();
  const data = await fetchAllBlog();

  return (
    <Container className='pt-4'>
      {user && <NewPosts />}
      <Posts data={data} />
    </Container>
  );
};
export default PostPage;
