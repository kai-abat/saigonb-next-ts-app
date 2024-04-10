"use client";

import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import PriceCard from "./PriceCard";
import { MdAdd, MdOutlineAddAPhoto } from "react-icons/md";

const PriceList = () => {
  const defaultValues = { id: 1, type: "Hot", size: "8oz", price: 100 };
  const [priceList, setPriceList] = useState<
    { id: number; type: string; size: string; price: number }[]
  >([defaultValues]);

  const disabledRemoveBtn = priceList.length < 2;

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

  return (
    <div
      id="image-upload-container"
      className="flex flex-col justify-center sm:justify-start items-center sm:flex-row gap-3 flex-wrap h-max "
    >
      {priceList.map((price, index) => {
        return (
          <PriceCard
            price={price}
            setPriceList={setPriceList}
            key={index}
            disabledRemoveBtn={disabledRemoveBtn}
          />
        );
      })}

      {priceList.length < 10 && (
        <div
          onClick={handleAddPriceComponent}
          className="w-60 h-80 bg-content3 flex justify-center items-center rounded-xl border-primary border-2 cursor-pointer hover:border-secondary"
        >
          <MdAdd className="w-full h-full fill-stone-300" />
        </div>
      )}
      <Input
        type="text"
        readOnly
        id="price-number"
        name="price-number"
        value={priceList.length.toString()}
        className="hidden"
      />
    </div>
  );
};
export default PriceList;
