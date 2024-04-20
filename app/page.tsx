import FacebookFeedsLoader from '@/components/loaders/FacebookFeedsLoader';
import FeaturedMenuLoader from '@/components/loaders/FeaturedMenuLoader';
import HeroLoader from '@/components/loaders/HeroLoader';
import WhyChooseUsLoader from '@/components/loaders/WhyChooseUsLoader';
import Container from '@/components/ui/Container';
import FacebookFeeds from '@/components/ui/FacebookFeeds';
import FeaturedMenu from '@/components/ui/FeaturedMenu';
import Hero from '@/components/ui/Hero';
import WhyChooseUs from '@/components/ui/WhyChooseUs';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <>
      <Hero />
      {/* <HeroLoader /> */}
      {/* <Suspense fallback={<HeroLoader />}>
        <Hero />
      </Suspense>
      <Container>
        <Suspense fallback={<FacebookFeedsLoader />}>
          <FacebookFeeds />
        </Suspense>
        <Suspense fallback={<WhyChooseUsLoader />}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<FeaturedMenuLoader />}>
          <FeaturedMenu />
        </Suspense>
      </Container> */}
    </>
  );
}
