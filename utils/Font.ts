import {
  Borel,
  Montserrat,
  Playfair_Display,
  Roboto_Mono
} from 'next/font/google';

// export const borel = Borel({
//   weight: '400',
//   display: 'swap',
//   subsets: ['latin'],
//   variable: '--font-borel'
// });

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
});

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono'
});

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display'
});
