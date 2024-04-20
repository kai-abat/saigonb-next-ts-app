import CommonContainerLoader from './CommonContainerLoader';
import PostsLoader from './PostsLoader';

const WhyChooseUsLoader = () => {
  return (
    <CommonContainerLoader>
      <PostsLoader />
    </CommonContainerLoader>
  );
};
export default WhyChooseUsLoader;
