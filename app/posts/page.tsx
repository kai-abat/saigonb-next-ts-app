import NewPosts from '@/components/posts/NewPosts';
import Posts from '@/components/posts/Posts';
import Container from '@/components/ui/Container';

const PostPage = () => {
  return (
    <Container className='pt-4'>
      <NewPosts />
      <Posts />
    </Container>
  );
};
export default PostPage;
