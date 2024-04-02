"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button, Image as ImageUI } from "@nextui-org/react";
import { AppProps } from "@/utils/types/Props";

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
    if (!event.target.files) return;
    const file = event.target.files[0];

    if (!file) {
      setSelectedFile(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImagePreviewUrl(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="flex items-start gap-6 mb-4">
        <div className="relative w-40 h-40 border-1 border-primary rounded-sm flex justify-center items-center text-center text-primary">
          {!imagePreviewUrl && <p>No image picked yet.</p>}
          {imagePreviewUrl && (
            <>
              <ImageUI
                as={Image}
                src={imagePreviewUrl}
                alt="The image selected by the user."
                fill
                className=" object-cover"
              />
            </>
          )}
        </div>
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
      </div>
    </div>
  );
}
