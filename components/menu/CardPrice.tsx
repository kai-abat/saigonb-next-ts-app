import { ComponentProps } from '@/utils/types/Props';
import CardPriceItem from './CardPriceItem';
import { Divider } from '@nextui-org/react';
const CardPrice = ({ prices, type, sub }: ComponentProps) => {
  return (
    <div className='flex w-full flex-col gap-2 p-3'>
      <div className='flex items-center justify-center gap-2'>
        <span className='text-left font-semibold'>{type}</span>
        <span className=' font-medium italic'>{sub}</span>
      </div>
      <Divider />
      {prices?.length === 0 && <div>N/A</div>}
      {prices &&
        prices?.length > 0 &&
        prices.map(price => <CardPriceItem key={price.id} price={price} />)}
    </div>
  );
};
export default CardPrice;
