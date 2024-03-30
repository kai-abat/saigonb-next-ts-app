"use client";
import { MENU_SIZE, MENU_TYPE } from "@/utils/services/PriceData";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

const PriceCard = ({
  price,
  setPriceList,
}: {
  price: {
    id: number;
    type: string;
    size: string;
    price: number;
  };
  setPriceList: Dispatch<
    SetStateAction<
      {
        id: number;
        type: string;
        size: string;
        price: number;
      }[]
    >
  >;
}) => {
  function handleSelectSize(e: ChangeEvent<HTMLSelectElement>) {
    const newSize = e.target.value;
    setPriceList((prevState) =>
      prevState.map((state) =>
        state.id === price.id
          ? {
              ...state,
              size: newSize,
            }
          : state
      )
    );
  }

  function handleSelectType(e: ChangeEvent<HTMLSelectElement>) {
    const newType = e.target.value;
    setPriceList((prevState) =>
      prevState.map((state) =>
        state.id === price.id
          ? {
              ...state,
              type: newType,
            }
          : state
      )
    );
  }

  function handlePriceChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const newPrice = e.target.value;
    price.price = Number(newPrice);
    setPriceList((prevState) =>
      prevState.map((state) =>
        state.id === price.id
          ? {
              ...state,
              price: Number(newPrice),
            }
          : state
      )
    );
  }

  function handleCloseCard() {
    setPriceList((prevState) =>
      prevState
        .filter((state) => state.id !== price.id)
        .map((state, index) => ({ ...state, id: index + 1 }))
    );
  }

  return (
    <Card className="p-3 border-2 border-primary hover:border-secondary bg-content3 transition-all duration-400 ease-in">
      <CardBody>
        <div className="flex flex-col gap-3">
          {/* <Input label="ID" value={price.id.toString()} /> */}
          <Select
            color="default"
            variant="faded"
            id={`price-select-type-${price.id}`}
            name={`price-select-type-${price.id}`}
            label="Select Type"
            className="max-w-xs"
            selectedKeys={[price.type]}
            onChange={handleSelectType}
            items={MENU_TYPE}
          >
            {(type) => <SelectItem key={type.value}>{type.label}</SelectItem>}
          </Select>
          <Select
            color="default"
            variant="faded"
            id={`price-select-size-${price.id}`}
            name={`price-select-size-${price.id}`}
            label="Select Size"
            className="max-w-xs"
            items={MENU_SIZE}
            selectedKeys={[price.size]}
            onChange={handleSelectSize}
          >
            {(size) => <SelectItem key={size.value}>{size.label}</SelectItem>}
          </Select>
          <Input
            color="default"
            variant="faded"
            id={`price-input-${price.id}`}
            name={`price-input-${price.id}`}
            type="number"
            label="Price"
            radius="sm"
            value={price.price.toString()}
            onChange={handlePriceChange}
          />
        </div>
      </CardBody>
      <CardFooter>
        <Button
          id={`price-btn-delete-${price.id}`}
          name={`price-btn-delete-${price.id}`}
          color="danger"
          className="w-full"
          onPress={handleCloseCard}
        >
          Delete {price.id} : {price.type} : {price.price}
        </Button>
      </CardFooter>
    </Card>
  );
};
export default PriceCard;
