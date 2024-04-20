import CommonContainerLoader from './CommonContainerLoader';
import PostsLoader from './PostsLoader';

const FacebookFeedsLoader = () => {
  return (
    <CommonContainerLoader>
      <PostsLoader />
    </CommonContainerLoader>
  );
};
export default FacebookFeedsLoader;
