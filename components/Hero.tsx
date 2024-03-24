import Image from "next/image";
import { CiCoffeeCup } from "react-icons/ci";
import { MdCoffeeMaker } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";

const Hero = () => {
  return (
    <>
      <div
        id="content1"
        className="bg-primary-500/80 backdrop-blur-sm flex gap-3 items-center flex-col sm:flex-row justify-evenly p-4"
      >
        <div
          id="box-content"
          className="sm:w-[30%] w-[100%] h-full flex flex-col gap-2"
        >
          <div
            id="box-content-title"
            className="flex gap-2 items-center contentTitleWithIcon"
          >
            <CiCoffeeCup />
            <p>High Quality Coffee</p>
          </div>
          <div>
            <p className=" indent-3 text-stone-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              deserunt ea voluptates suscipit impedit quibusdam ipsam officiis
              fugiat? Recusandae aut qui id veniam itaque nisi ipmet dolor sit
              lorem vel.
            </p>
          </div>
        </div>
        <div
          id="box-content"
          className="sm:w-[30%] w-[100%] h-full flex flex-col gap-2"
        >
          <div
            id="box-content-title"
            className="flex gap-2 items-center contentTitleWithIcon"
          >
            <MdCoffeeMaker />
            <p>Coffee Shops</p>
          </div>
          <div>
            <p className=" indent-3 text-stone-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              deserunt ea voluptates suscipit impedit quibusdam ipsam officiis
              fugiat? Recusandae aut qui id veniam itaque nisi voluptates
              suscipit impedit quibusdam.
            </p>
          </div>
        </div>
        <div
          id="box-content"
          className="sm:w-[30%] w-[100%] h-full flex flex-col gap-2"
        >
          <div
            id="box-content-title"
            className="flex gap-2 items-center contentTitleWithIcon"
          >
            <RiShoppingCartLine />
            <p>Shop Coffee Online</p>
          </div>
          <div>
            <p className=" indent-3 text-stone-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              deserunt ea voluptates suscipit impedit quibusdam ipsam officiis
              fugiat? Recusandae aut qui id veniam itaque nisi dolor sit amet
              consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div
        id="content2"
        className="bg-stone-800/70 backdrop-blur-sm flex flex-col sm:flex-row justify-center gap-4 items-center p-4"
      >
        <div className="flex flex-col gap-2 order-2 sm:order-none">
          <p className="text-lg font-bold text-primary-500 textShadow ">
            &quot;Savor the best with our coffee, where delicious meets quality
            in every cup&quot;
          </p>
          <p className="text-primary-50 italic indent-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            numquam, nobis fuga iusto animi mollitia labore voluptates quibusdam
            veniam excepturi illo, consequuntur praesentium autem incidunt
            blanditiis debitis obcaecati inventore omnis.
          </p>
        </div>
        <div className=" flex items-center justify-center order-1 sm:order-none">
          <Image
            src="/images/menu-001.jpg"
            alt="random image"
            width={200}
            height={200}
            className="h-full rounded-lg"
          />
        </div>
      </div>
      <div
        id="hot-products"
        className="bg-primary-500/80 backdrop-blur-sm flex items-center justify-evenly p-4"
      >
        {/* <HotProducts /> */}
      </div>
    </>
  );
};
export default Hero;
