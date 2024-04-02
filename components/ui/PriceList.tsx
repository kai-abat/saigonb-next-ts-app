"use client";

import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import PriceCard from "./PriceCard";
import { MdAdd, MdOutlineAddAPhoto } from "react-icons/md";

const PriceList = () => {
  const defaultValues = { id: 1, type: "Hot", size: "8oz", price: 100 };
  const [priceList, setPriceList] = useState<
    { id: number; type: string; size: string; price: number }[]
  >([defaultValues]);

  function handleAddPriceComponent() {
    setPriceList((prevState) => {
      const newId = prevState.length + 1;
      const newData = {
        id: newId,
        type: defaultValues.type,
        size: defaultValues.size,
        price: defaultValues.price,
      };
      return [...prevState, newData];
    });
  }

  useEffect(() => {
    console.log("useEffect", priceList);
  }, [priceList]);

  return (
    <div
      id="image-upload-container"
      className="flex flex-col justify-center sm:justify-start items-center sm:flex-row gap-3 flex-wrap h-max "
    >
      {priceList.map((price, index) => {
        return (
          <PriceCard price={price} setPriceList={setPriceList} key={index} />
        );
      })}

      {priceList.length < 10 && (
        <Button
          className="p-2"
          color="primary"
          radius="md"
          size="lg"
          isIconOnly
          onPress={handleAddPriceComponent}
        >
          <MdAdd className=" w-6 h-6" />
        </Button>
      )}
    </div>
  );
};
export default PriceList;
