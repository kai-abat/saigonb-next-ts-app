"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button, Image as ImageUI } from "@nextui-org/react";
import { AppProps } from "@/utils/Props";

// import classes from './image-picker.module.css';

export default function ImagePicker({ label = "", name = "" }: AppProps) {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [imagePreviewUrl, setImagePreviewUrl] = useState<any>();
  const imageInput = useRef<HTMLInputElement>(null);

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setImagePreviewUrl(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setImagePreviewUrl(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  function handlePickClick() {
    imageInput.current?.click();
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(event.target.files[0]);
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="flex flex-col items-start gap-3 mb-4 justify-center">
        <input
          className="hidden"
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <Button type="button" onPress={handlePickClick}>
          Pick an Image
        </Button>
        <div className="relative w-[100px] h-[100px] border-2 border-primary rounded-sm flex justify-center items-center text-center text-primary p-1">
          {!imagePreviewUrl && <p>No image picked yet.</p>}
          {imagePreviewUrl && (
            <ImageUI
              as={Image}
              src={imagePreviewUrl}
              alt="The image selected by the user."
              width={100}
              height={100}
              className="aspect-square object-cover object-center"
              radius="none"
            />
          )}
        </div>
      </div>
    </div>
  );
}
