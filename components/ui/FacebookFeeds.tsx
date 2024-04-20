import { fetchLandingData } from '@/utils/services/LandingAPI';
import FeaturedPostSlides from './FeaturedPostSlides';
import { fetchLoadingTimeout } from '@/utils/services/PageLoadingAPI';

const FacebookFeeds = async () => {
  const data = await fetchLandingData();
  await fetchLoadingTimeout(8000);
  return <FeaturedPostSlides posts={data.content} />;
};
export default FacebookFeeds;
