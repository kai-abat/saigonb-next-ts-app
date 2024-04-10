"use client";

import { useState } from "react";
import { Input } from "@nextui-org/react";
import ImageUploadCard from "./ImageUploadCard";
import { State } from "@/utils/actions/newMenuAction";
import { RiImageAddLine } from "react-icons/ri";
import ImageUploadEmptyCard from "./ImageUploadEmptyCard";

const ImageUpload = ({ formState }: { formState: State }) => {
  const [imageURLList, setImageURLList] = useState<
    { id: number; imageUrl: string; orderNumber: number }[]
  >([{ id: 1, imageUrl: "", orderNumber: 1 }]);

  const disabledRemoveBtn = imageURLList.length < 2;

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
      className="flex flex-col justify-center items-center sm:justify-start  sm:flex-row gap-4 flex-wrap h-max w-full "
    >
      {imageURLList.map((imageData, index) => {
        return (
          <ImageUploadCard
            setImageURLList={setImageURLList}
            key={index}
            imageData={imageData}
            formState={formState}
            disabledRemoveBtn={disabledRemoveBtn}
          />
        );
      })}

      {imageURLList.length < 10 && (
        <ImageUploadEmptyCard handler={handleAddImageComponent} />
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
