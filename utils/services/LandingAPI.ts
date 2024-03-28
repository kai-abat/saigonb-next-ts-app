import { CarouselData } from "../Props";
import { HomeData } from "./TempData";

export const fetchCarouselData = async () => {
  const carouselData: CarouselData[] = HomeData.carousel.map((car) => ({
    image: car.coverPhoto,
    title: car.title,
  }));
  return carouselData;
};
