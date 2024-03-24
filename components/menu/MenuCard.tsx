"use client";
import { AppProps } from "@/utils/Props";
import {
  Card,
  CardBody,
  CardFooter,
  Image as ImageUI,
} from "@nextui-org/react";
import Image from "next/image";
import Router from "next/router";
import Printer from "../Printer";

const MenuCard = ({ menuItem }: AppProps) => {
  // const hotPrices = menuItem?.price.filter((p) => p.type === "Hot");

  // const icedPrices = menuItem?.price.filter((p) => p.type === "Iced");

  if (!menuItem) return;

  return (
    <Card
      shadow="sm"
      isPressable
      onPress={() => Router.push(`/menu/${menuItem.id}`)}
      className="  bg-primary hover:ring-2 transition-all duration-700 hover:ring-secondary"
    >
      <CardBody
        id="card-body"
        className="overflow-visible p-0 flex justify-center items-center flex-none"
      >
        <ImageUI
          isZoomed
          as={Image}
          radius="none"
          shadow="sm"
          width={300}
          height={500}
          alt={menuItem.name}
          className=" h-full sm:h-auto aspect-square"
          src={menuItem.coverPhotos.at(0)?.image}
        />
      </CardBody>
      <CardFooter className="text-small flex-col w-full">
        <b>{menuItem.name}</b>
        <p>{menuItem.description}</p>
        {/* <Printer data={menuItem.coverPhotos} /> */}
        {/* {hotPrices && <CardPrice type="NONG (Hot)" prices={hotPrices} />}
        {icedPrices && <CardPrice type="DA (Iced)" prices={icedPrices} />} */}
      </CardFooter>
    </Card>
  );
};
export default MenuCard;
