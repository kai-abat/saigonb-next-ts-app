'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { PostsType } from '@/utils/services/TempData';
import FeaturedPost from './FeaturedPost';

const FeaturedPostSlides = ({ posts }: { posts: PostsType }) => {
  return (
    <section className=''>
      <div className='rounded-xl bg-primary/60'>
        <Swiper
          navigation
          rewind
          pagination={{ type: 'bullets' }}
          modules={[Navigation, Pagination, Autoplay]}
          // onSwiper={swiper => console.log(swiper)}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
            waitForTransition: true
          }}
          className='mySwiper h-max w-full'
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index}>
              <FeaturedPost
                title={post.title}
                key={index}
                classNames={{
                  base: 'bg-transparent rounded-none',
                  content: 'px-12 pb-4'
                }}
              >
                {post.imagePosition === 'left' && (
                  <>
                    <FeaturedPost.ImageContent imageUrl={post.imageUrl} />
                    <FeaturedPost.Content details={post.details} />
                  </>
                )}
                {post.imagePosition === 'right' && (
                  <>
                    <FeaturedPost.Content details={post.details} />
                    <FeaturedPost.ImageContent imageUrl={post.imageUrl} />
                  </>
                )}
              </FeaturedPost>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default FeaturedPostSlides;
