import Hero from '@/components/ui/Hero';
import { CarouselData } from '@/utils/types/Props';
import {
  fetchCarouselData,
  fetchLandingData
} from '@/utils/services/LandingAPI';
import { getUserData } from '@/utils/services/UserAPI';
import Carousel from '@/components/ui/Carousel/Carousel';
import FeaturedPost from '@/components/ui/FeaturedPost';
import FeaturedMenu from '@/components/ui/FeaturedMenu';
import CarouselContent from '@/components/ui/Carousel/CarouselContent';
import WhyChooseUs from '@/components/ui/WhyChooseUs';
import Container from '@/components/ui/Container';
import FeaturedPostSlides from '@/components/ui/FeaturedPostSlides';

export default async function HomePage() {
  const userData = await getUserData();

  const carouselData: CarouselData[] = await fetchCarouselData();

  const data = await fetchLandingData();

  const dataContentImages = data.content.map(content => content.imageUrl);

  console.log(carouselData);

  return (
    <>
      <Hero />
      <Container>
        <FeaturedPostSlides posts={data.content} />
        <WhyChooseUs />
        <FeaturedMenu />
      </Container>
    </>
  );
}
