import type { Metadata } from 'next';
import './globals.css';
import { ComponentProps } from '@/utils/types/Props';
import Header from '@/components/layout/Header';
import BreadCrumbs from '@/components/ui/BreadCrumbs';
import Footer from '@/components/layout/Footer';
import { Divider } from '@nextui-org/react';
import { Providers } from './providers';
import { getUserData } from '@/utils/services/UserAPI';
import Image from 'next/image';
import { montserrat, playfairDisplay, roboto_mono } from '@/utils/Font';
import layoutBackgroundImage from '@/public/images/bg/bg-top.png';
import Initializer from '@/components/redux/Initializer';

export const metadata: Metadata = {
  title: 'Saigon Brewers',
  description:
    'Saigon Brewers, Legitimate brewers of vietnamese coffee beans and more'
};

export default async function RootLayout({ children }: ComponentProps) {
  const userData = await getUserData();

  return (
    <html
      lang='en'
      className={`${roboto_mono.variable} ${playfairDisplay.variable} ${montserrat.className} `}
    >
      <body className='bg-primary-100 dark:bg-stone-950'>
        <Providers>
          <Initializer userData={userData}>
            <section
              id='main-section'
              className='min-w-420px relative flex min-h-screen flex-col justify-between bg-primary-100 dark:bg-stone-950'
            >
              <Header userData={userData} />
              <div className='fixed right-0 top-0 z-0 h-full min-h-[80dvh] w-full opacity-10 lg:min-h-dvh'>
                <Image
                  src={layoutBackgroundImage}
                  alt='background top'
                  className='z-10 h-full w-full object-cover grayscale'
                  placeholder='blur'
                  quality={100}
                />
                {/* Requested to remove this background */}
                {/* <Image
                src='/images/bg/bg-top-2.jpg'
                width={200}
                height={200}
                alt='background top 2'
                className='absolute left-32 top-[18%] z-10 h-[300px] w-[300px] rounded-full object-fill grayscale'
              /> */}
              </div>

              <main className=' z-30 mb-4 flex h-full flex-col gap-y-4 '>
                {children}
              </main>
              <Footer />
            </section>
          </Initializer>
        </Providers>
      </body>
    </html>
  );
}
