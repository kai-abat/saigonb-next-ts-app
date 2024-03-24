import { AppProps } from "@/utils/Props";
import CardPriceItem from "./CardPriceItem";
import { Divider } from "@nextui-org/react";

const CardPrice = ({ prices, type, sub }: AppProps) => {
  return (
    <div className="w-full p-3 flex flex-col gap-2">
      <div className="flex gap-2 items-center justify-center">
        <span className="text-left font-semibold">{type}</span>
        <span className=" font-medium italic">{sub}</span>
      </div>
      <Divider />
      {prices?.length === 0 && <div>N/A</div>}
      {prices &&
        prices?.length > 0 &&
        prices.map((price) => <CardPriceItem key={price.id} price={price} />)}
    </div>
  );
};
export default CardPrice;
