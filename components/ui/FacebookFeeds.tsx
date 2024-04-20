import { fetchLandingData } from '@/utils/services/LandingAPI';
import FeaturedPostSlides from './FeaturedPostSlides';

const FacebookFeeds = async () => {
  const data = await fetchLandingData();
  return <FeaturedPostSlides posts={data.content} />;
};
export default FacebookFeeds;
