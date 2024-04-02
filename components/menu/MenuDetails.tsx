import { AppProps } from "@/utils/types/Props";
import CardPrice from "./CardPrice";
import ImageSlider from "../ImageSlider";

const MenuDetails = ({ menuItem }: AppProps) => {
  const hotPrices = menuItem?.price.filter((p) => p.type === "Hot");

  const icedPrices = menuItem?.price.filter((p) => p.type === "Iced");

  if (!menuItem) return;
  return (
    <div className="flex flex-col md:flex-row gap-2 w-full ">
      <div className="w-full flex-initial md:flex-grow-0 md:w-[50%] border-primary border-1 rounded-md border-solid bg-content3 p-3">
        {menuItem.coverPhotos.length > 0 && (
          <ImageSlider images={menuItem.coverPhotos} />
        )}
      </div>

      <div className="w-full flex-initial border-primary border-1 rounded-md border-solid flex flex-col justify-between bg-content3">
        <div className="p-3">
          <div className="font-semibold bg-primary sm:text-xl md:text-2xl p-3 rounded-t-md ">
            {menuItem.name}
          </div>
          <div className="bg-content3 font-light sm:text-base md:text-lg p-2">
            {menuItem.description}
          </div>
        </div>
        <div className="p-3">
          <div className="bg-primary p-3 rounded-t-sm font-semibold sm:text-lg md:text-xl">
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

{
  /* {menuItem.coverPhotos.length > 0 && (
          <ImageSlider images={menuItem.coverPhotos} />
        )} */
}

{
  /* <div className="w-[400px] h-[400px] flex justify-center items-center">
          <ImageUI
            isZoomed
            as={Image}
            radius="md"
            shadow="md"
            width={400}
            height={400}
            alt={menuItem.name}
            className="w-full object-cover aspect-square"
            src={menuItem.coverPhotos.at(0)?.image}
          />
        </div>
        <div className="w-[400px] p-2 overscroll-x-contain overflow-x-scroll flex gap-2">
          {menuItem.coverPhotos.map((cover, index) => {
            return (
              <div key={cover.id} className="grow-0 p-1">
                <div className="w-[100px] h-[100px] ">
                  <ImageUI
                    as={Image}
                    radius="none"
                    shadow="sm"
                    width={100}
                    height={100}
                    src={cover.image}
                    alt={cover.id.toString()}
                    className="aspect-square object-cover contrast-50 hover:contrast-100 cursor-pointer "
                  />
                </div>
              </div>
            );
          })}
        </div> */
}

{
  /* <div className="w-full sm:w-[50%] border-primary border-1 rounded-md border-solid flex flex-col justify-between bg-content3">
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
      </div> */
}
