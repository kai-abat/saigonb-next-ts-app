import { AppProps } from "@/utils/Props";
import { Divider, Image as ImageUI } from "@nextui-org/react";
import Image from "next/image";
import CardPrice from "./CardPrice";

const MenuDetails = ({ menuItem }: AppProps) => {
  const hotPrices = menuItem?.price.filter((p) => p.type === "Hot");

  const icedPrices = menuItem?.price.filter((p) => p.type === "Iced");

  if (!menuItem) return;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
      <div className="w-full">
        <ImageUI
          isZoomed
          as={Image}
          radius="md"
          shadow="md"
          width={1200}
          height={1500}
          alt={menuItem.name}
          className="w-full object-cover aspect-auto"
          src={menuItem.coverPhotos.at(0)?.image}
        />
      </div>
      <div className="w-full border-primary border-1  rounded-md border-solid flex flex-col justify-between bg-content3">
        <div className="p-3 h-full">
          <div className="font-semibold bg-primary sm:text-xl md:text-2xl p-3 rounded-t-md ">
            {menuItem.name}
          </div>
          <div className="bg-content3 h-full font-light sm:text-base md:text-lg p-2">
            {menuItem.description}
          </div>
        </div>
        <div className="p-3">
          <div className=" bg-primary p-3 rounded-t-sm font-semibold sm:text-lg md:text-xl  ">
            Price
          </div>
          <div className=" bg-content3 rounded-b-md flex">
            {hotPrices && (
              <CardPrice type="NONG" sub="HOT" prices={hotPrices} />
            )}
            {icedPrices && (
              <CardPrice type="DA" sub="ICED" prices={icedPrices} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuDetails;
