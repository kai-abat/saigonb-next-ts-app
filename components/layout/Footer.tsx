import Link from 'next/link';
import Brand from './Brand';
import Logo from './Logo';

const Footer = () => {
  const year = new Date().getFullYear();
  const copyright = `Copyright © ${year} Saigon Brewers. All rights reserved.`;
  return (
    <div className='z-40 flex flex-col items-center justify-center gap-10 bg-primary px-3 py-6 sm:flex-row sm:justify-between'>
      <Logo />
      <div className='flex flex-col items-center justify-center gap-x-8'>
        <p className=' text-center'>{copyright}</p>
        <p>
          <Link href='/brand' className='transition-all hover:text-stone-300'>
            Trademark Policy
          </Link>
        </p>
      </div>

      <div className=' text-center sm:text-right'>
        <Brand />
        <p>More Coffee, More Progress</p>
        <p>Quality, Traceability, Sustainability</p>
      </div>
    </div>
  );
};
export default Footer;
