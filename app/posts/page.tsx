import NewPosts from '@/components/posts/NewPosts';
import Posts from '@/components/posts/Posts';
import Container from '@/components/ui/Container';
import { getPost } from '@/utils/actions/postActions';

const PostPage = async () => {
  const data = await getPost();

  return (
    <Container className='pt-4'>
      <NewPosts />
      <Posts data={data} />
    </Container>
  );
};
export default PostPage;
