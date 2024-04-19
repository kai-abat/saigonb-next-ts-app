import { ReactNode } from 'react';
import Image from 'next/image';
import { Divider } from '@nextui-org/react';
import Title from './Title';

interface classNames {
  base?: string;
  content?: string;
}

const FeaturedPost = ({
  children,
  title,
  classNames
}: {
  title: string;
  children: ReactNode;
  classNames?: classNames;
}) => {
  return (
    <section
      className={`flex h-max flex-col gap-4 rounded-xl bg-primary/60 p-4 ${classNames?.base}`}
    >
      <Title capitalize>{title}</Title>
      <Divider />
      <div
        id='featured-post-content'
        className={`flex h-full w-full flex-col items-center justify-start   gap-4 sm:justify-around lg:flex-row lg:items-start
        ${classNames?.content}
        `}
      >
        {children}
      </div>
    </section>
  );
};

const ImageContent = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className=' order-1 aspect-square w-full max-w-[400px] overflow-hidden rounded-xl object-cover lg:order-none'>
      <Image src={imageUrl} alt='image content' width={500} height={400} />
    </div>
  );
};

const Content = ({ details }: { details: string[] }) => {
  return (
    <div className=' order-2 flex w-full flex-col gap-4 lg:order-none'>
      <span className='flex flex-col gap-4 lg:mt-2'>
        {details.map((detail, i) => (
          <p
            key={i}
            className=' text-sm text-foreground lg:text-base xl:text-lg'
          >
            {detail}
          </p>
        ))}
      </span>
    </div>
  );
};

FeaturedPost.ImageContent = ImageContent;
FeaturedPost.Content = Content;
export default FeaturedPost;
