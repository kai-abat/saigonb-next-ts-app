"use client";
import useUploadImage from "@/utils/hooks/useUploadImage";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
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
  imageURLList,
  setImageURLList,
}: {
  imageData: {
    id: string;
    imageUrl: string;
    fileName: string;
    sort: number;
  };
  imageURLList: {
    id: string;
    imageUrl: string;
    fileName: string;
    sort: number;
  }[];
  setImageURLList: Dispatch<
    SetStateAction<
      {
        id: string;
        imageUrl: string;
        fileName: string;
        sort: number;
      }[]
    >
  >;
}) => {
  const [fileName, setFileName] = useState<string>(imageData.fileName);
  const [orderBy, setOrderBy] = useState<string>(imageData.sort.toString());
  const {
    handlePickClick,
    getImagePreviewUrl,
    handleImageChange,
    imageInputRef,
  } = useUploadImage();

  const imageUrl = getImagePreviewUrl();

  useEffect(() => {
    if (typeof imageUrl === "string" && imageData.imageUrl === "") {
      const newList = imageURLList.map((data) =>
        data.id === imageData.id ? { ...data, imageUrl: imageUrl } : data
      );
      setImageURLList([...newList]);
      imageData.imageUrl = imageUrl;
    }
  }, [imageData.id, imageURLList, imageUrl, setImageURLList, imageData]);

  function handleCloseCard() {
    const newList = imageURLList
      .filter((data) => data.id != imageData.id)
      .sort((a, b) => a.sort - b.sort);

    setImageURLList([...newList]);
  }

  function handleSelectFile(e: ChangeEvent<HTMLInputElement>) {
    handleImageChange(e);
  }

  function handleFilenameChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const newFileName = e.target.value;
    imageData.fileName = newFileName;
    setFileName(newFileName);
    const newList = imageURLList.map((data) =>
      data.id === imageData.id ? { ...data, filename: newFileName } : data
    );
    setImageURLList([...newList]);
  }

  function handleOrderByChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const newOrderBy = e.target.value;
    imageData.sort = Number(newOrderBy);
    setOrderBy(newOrderBy);
    const newList = imageURLList.map((data) =>
      data.id === imageData.id ? { ...data, sort: Number(newOrderBy) } : data
    );
    setImageURLList([...newList]);
  }

  return (
    <Card className="p-3 bg-content3 border-2 border-primary hover:border-secondary transition-all duration-400 ease-in">
      <CardBody>
        {!imageUrl && <p>No image picked yet.</p>}
        {imageUrl && (
          <ImageUI
            as={Image}
            src={imageUrl}
            alt="The image selected by the user."
            width={100}
            height={100}
            className="aspect-square object-cover object-center"
            radius="none"
          />
        )}
      </CardBody>
      <CardFooter>
        <div className="flex flex-col gap-3">
          <input
            className="hidden w-full"
            type="file"
            accept="image/png, image/jpeg"
            id={`image-file-${imageData.id}`}
            name={`image-file-${imageData.id}`}
            ref={imageInputRef}
            onChange={handleSelectFile}
          />
          <Input
            type="text"
            label="Filename"
            isRequired
            radius="sm"
            id={`image-filename-${imageData.id}`}
            name={`image-filename-${imageData.id}`}
            value={fileName}
            onChange={handleFilenameChange}
            color="default"
            variant="faded"
          />
          <Input
            type="number"
            label="Order By"
            isReadOnly
            radius="sm"
            id={`image-order-key-${imageData.id}`}
            name={`image-order-key-${imageData.id}`}
            value={orderBy}
            onChange={handleOrderByChange}
            min="1"
            max="10"
            className="hidden"
          />
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
            Delete
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
export default ImageUploadCard;
