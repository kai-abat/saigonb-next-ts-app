"use client";

import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import ImageUploadCard from "./ImageUploadCard";
import { MdOutlineAddAPhoto } from "react-icons/md";

const ImageUpload = () => {
  const [imageURLList, setImageURLList] = useState<
    { id: string; imageUrl: string; fileName: string; sort: number }[]
  >([{ id: "1", imageUrl: "", fileName: "menuName-1", sort: 1 }]);

  function handleAddImageComponent() {
    const len = imageURLList.length + 1;
    setImageURLList([
      ...imageURLList,
      {
        id: `${len.toString()}`,
        imageUrl: "",
        fileName: `menuName-${len.toString()}`,
        sort: len,
      },
    ]);
  }

  return (
    <div
      id="image-upload-container"
      className="flex flex-col justify-center sm:justify-start items-center sm:flex-row gap-3 flex-wrap h-max "
    >
      {imageURLList.map((imageData, index) => {
        return (
          <ImageUploadCard
            imageURLList={imageURLList}
            setImageURLList={setImageURLList}
            key={index}
            imageData={imageData}
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
