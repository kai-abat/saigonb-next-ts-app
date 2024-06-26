import CardsLoader from '@/components/loaders/CardsLoader';
import FacebookFeedsLoader from '@/components/loaders/FacebookFeedsLoader';
import FeaturedMenuLoader from '@/components/loaders/FeaturedMenuLoader';
import HeroLoader from '@/components/loaders/HeroLoader';
import WhyChooseUsLoader from '@/components/loaders/WhyChooseUsLoader';
import Container from '@/components/ui/Container';
import Feeds from '@/components/ui/Feeds';
import FeaturedMenu from '@/components/ui/FeaturedMenu';
import Hero from '@/components/ui/Hero';
import WhyChooseUs from '@/components/ui/WhyChooseUs';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<HeroLoader />}>
        <Hero />
      </Suspense>
      <Container>
        <Suspense fallback={<FacebookFeedsLoader />}>
          <Feeds />
        </Suspense>
        <Suspense fallback={<WhyChooseUsLoader />}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<FeaturedMenuLoader />}>
          <FeaturedMenu />
        </Suspense>
      </Container>
    </>
  );
}
