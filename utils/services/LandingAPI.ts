import { createSupabaseServerClient } from '../supabase/server';
import { CarouselData } from '../types/Props';
import { HomeData, HomeDataType } from './TempData';

export const fetchCarouselData = async () => {
  const carouselData: CarouselData[] = HomeData.carousel.map(car => ({
    image: car.coverPhoto,
    title: car.title
  }));
  return carouselData;
};

export const fetchLandingData = async (): Promise<HomeDataType> => {
  return HomeData;
};

export const fetchHeroSlides = async (): Promise<string[] | undefined> => {
  const supabase = createSupabaseServerClient();

  const { data } = await supabase.from('Hero').select('imageUrl');

  if (!data) return;
  const imageUrls: string[] = [];
  data.forEach(url => {
    if (url.imageUrl && url.imageUrl !== '') {
      imageUrls.push(url.imageUrl);
    }
  });
  if (imageUrls.length === 0) return;

  return imageUrls;

  // // const { data, error } = await supabase.storage.from('hero')
  // const { data, error } = await supabase.from("Hero")
  // console.log('fetchHeroSlides', data, error);

  // const names = data?.map((hero, index) => {
  //   return hero.name;
  // });

  // console.log('names:', names);
};
