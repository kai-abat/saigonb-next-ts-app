import Brand from '@/components/layout/Brand';
import Logo from '@/components/layout/Logo';
import Container from '@/components/ui/Container';
import { Divider } from '@nextui-org/react';

const BrandPage = () => {
  return (
    <Container>
      <div className='mt-4 gap-y-4 rounded-xl bg-primary/60 p-4'>
        <div className='flex flex-col gap-6 px-4 py-4 sm:px-8'>
          <p className='text-2xl font-bold text-secondary'>Brand</p>
          <p className='text-xl'>
            Saigon Brewers brand assets and usage guidelines
          </p>
          <p className='text-2xl font-bold text-secondary'>
            Trademark User Agreement
          </p>
          <p className='text-xl'>
            The Saigon Brewers name and logos are trademarks and owned by{' '}
            <span className='font-semibold text-secondary'>
              Saigon Brewers Coffee Shop
            </span>
            .
          </p>
          <p className='text-xl'>
            You may not use the Saigon Brewers name or logos in any way that
            could mistakenly imply any official connection with or endorsement
            of Saigon Brewers Inc. Team. Any use of the Saigon Brewers name or
            logos in a manner that could cause customer confusion is not
            permitted.
          </p>
          <p className='text-xl'>
            This includes naming a product or service in a way that emphasizes
            the Saigon Brewers brand, like “Saigon Brewers Themes” or “Saigon
            Brewers Studio”.
          </p>

          <p className='text-xl'>
            Additionally, you may not use our trademarks for t-shirts, stickers,
            or other merchandise without explicit written consent.
          </p>
          <p className='text-2xl font-bold text-secondary'>Assets</p>
          <p className='text-xl'>
            These assets are provided for use in situations like articles and
            video tutorials. They should not be used in any way that could be
            confusing for customers or imply any affiliation with Saigon Brewers
            Inc. Team.
          </p>
          <p className='text-2xl font-bold text-secondary'>
            Our Official Logo:
          </p>
          <div className='flex w-full items-center justify-center'>
            <Logo width={200} height={200} />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default BrandPage;
