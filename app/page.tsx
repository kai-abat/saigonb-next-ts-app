import Hero from '@/components/ui/Hero'
import { CarouselData } from '@/utils/types/Props'
import {
  fetchCarouselData,
  fetchLandingData
} from '@/utils/services/LandingAPI'
import { getUserData } from '@/utils/services/UserAPI'
import Carousel from '@/components/ui/Carousel/Carousel'
import FeaturedPost from '@/components/ui/FeaturedPost'
import FeaturedMenu from '@/components/ui/FeaturedMenu'
import CarouselContent from '@/components/ui/Carousel/CarouselContent'
import WhyChooseUs from '@/components/ui/WhyChooseUs'

export default async function HomePage() {
  const userData = await getUserData()

  const carouselData: CarouselData[] = await fetchCarouselData()

  const data = await fetchLandingData()
  const featuredPost1 = data.content.at(0)
  const featuredPost2 = data.content.at(1)
  const dataContentImages = data.content.map(content => content.imageUrl)

  console.log(carouselData)

  return (
    <div className='flex flex-col gap-6'>
      {/* <Carousel data={carouselData} /> */}
      <Carousel data={dataContentImages}>
        <CarouselContent>
          {data.content.map((content, index) => (
            <FeaturedPost key={index}>
              {content.imagePosition === 'left' && (
                <>
                  <FeaturedPost.ImageContent imageUrl={content.imageUrl} />
                  <FeaturedPost.Content
                    title={content.title}
                    details={content.details}
                  />
                </>
              )}
              {content.imagePosition === 'right' && (
                <>
                  <FeaturedPost.Content
                    title={content.title}
                    details={content.details}
                  />
                  <FeaturedPost.ImageContent imageUrl={content.imageUrl} />
                </>
              )}
            </FeaturedPost>
          ))}
        </CarouselContent>
      </Carousel>
      <WhyChooseUs />
      <Hero />

      <FeaturedMenu />
    </div>
  )
}
