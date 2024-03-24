import { AppProps } from "@/utils/Props";
import { formatToCurreny } from "@/utils/helper";

const CardPriceItem = ({ price }: AppProps) => {
  if (!price) return;
  return (
    <div className="flex justify-between">
      <span>{price.size}</span>
      <span>{formatToCurreny(price.price)}</span>
    </div>
  );
};
export default CardPriceItem;
