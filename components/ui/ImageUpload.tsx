"use client";

import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import ImageUploadCard from "./ImageUploadCard";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { State } from "@/utils/services/LoginAction";

const ImageUpload = ({ formState }: { formState: State }) => {
  const [imageURLList, setImageURLList] = useState<
    { id: number; imageUrl: string; orderNumber: number }[]
  >([{ id: 1, imageUrl: "", orderNumber: 1 }]);

  function handleAddImageComponent() {
    setImageURLList((prevState) => {
      const newId = prevState.length + 1;
      const newData = {
        id: newId,
        imageUrl: "",
        orderNumber: newId,
      };

      return [...prevState, newData];
    });
  }

  return (
    <div
      id="image-upload-container"
      className="flex flex-col justify-center sm:justify-start items-center sm:flex-row gap-3 flex-wrap h-max "
    >
      {imageURLList.map((imageData, index) => {
        return (
          <ImageUploadCard
            setImageURLList={setImageURLList}
            key={index}
            imageData={imageData}
            formState={formState}
          />
        );
      })}

      {imageURLList.length < 10 && (
        <Button
          className="p-2"
          color="primary"
          radius="md"
          size="lg"
          isIconOnly
          onPress={handleAddImageComponent}
        >
          <MdOutlineAddAPhoto className=" w-6 h-6" />
        </Button>
      )}
      <Input
        type="text"
        readOnly
        id="image-number-of-upload"
        name="image-number-of-upload"
        value={imageURLList.length.toString()}
        className="hidden"
      />
    </div>
  );
};
export default ImageUpload;
