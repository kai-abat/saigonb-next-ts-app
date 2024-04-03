"use client";
import { getFallbackImagePath } from "@/utils/Helper";
import useUploadImage from "@/utils/hooks/useUploadImage";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image as ImageUI,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const ImageUploadCard = ({
  imageData,
  setImageURLList,
}: {
  imageData: {
    id: number;
    imageUrl: string;
    sort: number;
  };

  setImageURLList: Dispatch<
    SetStateAction<
      {
        id: number;
        imageUrl: string;
        sort: number;
      }[]
    >
  >;
}) => {
  const { handlePickClick, handleImageChange, imagePreviewUrl, imageInputRef } =
    useUploadImage();

  useEffect(() => {
    if (typeof imagePreviewUrl === "string") {
      setImageURLList((prevState) =>
        prevState.map((state) =>
          state.id === imageData.id
            ? { ...state, imageUrl: imagePreviewUrl }
            : state
        )
      );
    }
  }, [imagePreviewUrl, setImageURLList, imageData]);

  function handleCloseCard() {
    setImageURLList((prevState) =>
      prevState
        .filter((state) => state.id !== imageData.id)
        .map((state, index) => ({ ...state, id: index + 1, sort: index + 1 }))
    );
  }

  function handleSelectFile(e: ChangeEvent<HTMLInputElement>) {
    handleImageChange(e);
  }

  function handleOrderByChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const newOrderBy = e.target.value;
    setImageURLList((prevState) =>
      prevState.map((state) =>
        state.id === imageData.id
          ? { ...state, sort: Number(newOrderBy) }
          : state
      )
    );
  }

  return (
    <Card className="p-3 bg-content3 border-2 border-primary hover:border-secondary transition-all duration-400 ease-in gap-y-1 rounded-xl">
      <CardHeader className=" p-2">
        <div className=" h-[150px] w-[150px] aspect-square flex justify-center items-center text-center border-2 border-secondary overflow-hidden rounded-xl">
          {!imageData.imageUrl && (
            <Image
              src={getFallbackImagePath()}
              alt="No image selected yet."
              width={150}
              height={150}
              className="aspect-square object-cover object-center"
            />
          )}
          {imageData.imageUrl && (
            <Image
              src={imageData.imageUrl}
              alt="The image selected by the user."
              width={150}
              height={150}
              className="aspect-square object-cover object-center"
            />
          )}
        </div>
      </CardHeader>
      <CardFooter className="p-2">
        <div className="flex flex-col gap-3 w-full">
          {/* <Input type="text" readOnly value={imageData.imageUrl} /> */}
          {/* nextui Input has bug in select file */}
          <input
            className="w-full hidden"
            type="file"
            accept="image/png, image/jpeg"
            id={`image-file-${imageData.id}`}
            name={`image-file-${imageData.id}`}
            ref={imageInputRef}
            onChange={handleSelectFile}
          />
          <Input
            type="number"
            label="Order By"
            isReadOnly
            radius="sm"
            id={`image-order-key-${imageData.id}`}
            name={`image-order-key-${imageData.id}`}
            value={imageData.sort.toString()}
            onChange={handleOrderByChange}
            min="1"
            max="10"
            className="hidden"
          />
          <Button
            className="w-full rounded-xl"
            color="primary"
            id={`select-image-btn-${imageData.id}`}
            name={`select-image-btn-${imageData.id}`}
            onPress={handlePickClick}
            radius="none"
          >
            Browse
          </Button>
          <Button
            color="danger"
            id={`delete-btn-${imageData.id}`}
            name={`delete-btn-${imageData.id}`}
            onPress={handleCloseCard}
            className="w-full rounded-xl"
          >
            Remove
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
export default ImageUploadCard;
