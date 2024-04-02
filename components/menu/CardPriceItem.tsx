import { AppProps } from "@/utils/types/Props";
import { formatToCurreny } from "@/utils/Helper";

const CardPriceItem = ({ price }: AppProps) => {
  if (!price) return;
  return (
    <div className="flex justify-between">
      <span>{price.size}</span>
      {price.price != null && <span>{formatToCurreny(price.price)}</span>}
    </div>
  );
};
export default CardPriceItem;
