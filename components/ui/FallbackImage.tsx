import Image from 'next/image';
import fallbackImage from '@/public/images/saigonbrewers-fallback-loader-w400.png';

const FallbackImage = () => {
  return (
    <Image src={fallbackImage} alt='Fallback image' className='h-full w-full' />
  );
};
export default FallbackImage;
