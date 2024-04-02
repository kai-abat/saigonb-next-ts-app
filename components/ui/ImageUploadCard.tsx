"use client";
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
    <Card className="p-3 bg-content3 border-2 border-primary hover:border-secondary transition-all duration-400 ease-in">
      <CardHeader>
        {!imageData.imageUrl && <p>No image picked yet.</p>}
        {imageData.imageUrl && (
          <Image
            // as={Image}
            src={imageData.imageUrl}
            alt="The image selected by the user."
            width={100}
            height={100}
            className="aspect-square object-cover object-center"
            // radius="none"
          />
        )}
      </CardHeader>
      <CardBody>
        <div className="flex flex-col gap-3">
          <Input type="text" readOnly value={imageData.imageUrl} />
          {/* nextui Input has bug in select file */}
          <input
            className="w-full"
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
            // className="hidden"
          />
        </div>
      </CardBody>
      <CardFooter>
        <div className="flex flex-col gap-3 w-full">
          <Button
            className="w-full"
            color="primary"
            id={`select-image-btn-${imageData.id}`}
            name={`select-image-btn-${imageData.id}`}
            onPress={handlePickClick}
          >
            Select Image
          </Button>
          <Button
            color="danger"
            id={`delete-btn-${imageData.id}`}
            name={`delete-btn-${imageData.id}`}
            onPress={handleCloseCard}
          >
            Delete : {imageData.id} : {imageData.sort}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
export default ImageUploadCard;
