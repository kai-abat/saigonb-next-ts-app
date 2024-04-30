'use client';
import { getFallbackImagePath } from '@/utils/Helper';
import useUploadImage from '@/utils/hooks/useUploadImage';
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Input,
  Tooltip,
  cn
} from '@nextui-org/react';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';
import {
  Controller,
  UseFieldArrayMove,
  UseFieldArrayRemove,
  useFormContext
} from 'react-hook-form';
import InputController from '../nextui/controllers-react-hook-form/InputController';
import { TbArrowMoveLeft, TbArrowMoveRight } from 'react-icons/tb';
import { LuMoveLeft, LuMoveRight } from 'react-icons/lu';
import { LiaTrashSolid } from 'react-icons/lia';
import { RiDeleteBin2Line, RiDeleteBin5Line } from 'react-icons/ri';
import fallbackImage from '@/public/images/saigonbrewers-fallback-loader-w400.png';

const ImageUploadCardV2 = ({
  index,
  remove,
  move,
  lastIndex
}: {
  index: number;
  remove: UseFieldArrayRemove;
  move: UseFieldArrayMove;
  lastIndex: number;
}) => {
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [imageUrlErrorMsg, setImageUrlErrorMsg] = useState<
    string | undefined
  >();
  const { handlePickClick, handleImageChange, imageInputRef, selectedFile } =
    useUploadImage();
  const { setValue, getFieldState, clearErrors, getValues, register } =
    useFormContext();

  const imageUrlName = `imageUpload.${index}.imageUrl`;
  const orderNumberName = `imageUpload.${index}.orderNumber`;
  const imageUploadFileName = `imageUpload.${index}.file`;

  const imageUrlFieldState = getFieldState(imageUrlName);

  // remove button
  const isDisabledRemove = index === lastIndex && index === 0;

  // move left button
  const isDisabledMoveLeft = index === 0 ? true : false;
  function handleMoveLeft() {
    const orderNumberIndexSwapping = index - 1;
    const orderNumberNameSwapping = `imageUpload.${orderNumberIndexSwapping}.orderNumber`;
    setValue(orderNumberName, index);
    setValue(orderNumberNameSwapping, index + 1);
    move(index, index - 1);
  }

  // move right button
  const isDisabledMoveRight = index === lastIndex ? true : false;
  function handleMoveRight() {
    const orderNumberIndexSwapping = index + 1;
    const orderNumberNameSwapping = `imageUpload.${orderNumberIndexSwapping}.orderNumber`;
    setValue(orderNumberName, index + 2);
    setValue(orderNumberNameSwapping, index + 1);
    move(index, index + 1);
  }

  useEffect(() => {
    const imageUrlValue: string = getValues(imageUrlName);
    if (imageUrlValue.includes('.supabase.co')) {
      setImageUrl(imageUrlValue);
    }
  }, [getValues, imageUrlName]);

  useEffect(() => {
    if (!selectedFile) {
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setImageUrl(objectUrl);
    setValue(imageUrlName, objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile, index, setValue, imageUrlName]);

  function handleSelectFile(e: ChangeEvent<HTMLInputElement>) {
    handleImageChange(e);
    if (imageUrlFieldState.invalid) {
      clearErrors(imageUrlName);
    }
    // if (servMessageImageURL) servMessageImageURL = undefined;
  }

  function handleRemove() {
    remove(index);
  }

  // className={`h-96 w-60 gap-y-4 rounded-xl border-2 bg-content3 p-3
  // debug/dev mode update the height
  //className={`h-[32rem] w-60 gap-y-4 rounded-xl border-2 bg-content3 p-3
  const imageUploadCard = (
    <Card
      className={`min-h-96 w-60 gap-y-4 rounded-xl border-2 bg-content3 p-3
${
  !imageUrlFieldState.invalid
    ? 'border-primary hover:border-secondary'
    : 'border-danger hover:border-danger/70'
} `}
    >
      <CardHeader className=' p-2'>
        {/* Image Preview Fallback */}
        <div className=' flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border-2 border-secondary text-center '>
          {!imageUrl && (
            <Image
              src={fallbackImage}
              alt='No image selected yet.'
              className='aspect-square w-full object-cover object-center'
            />
          )}
          {/* Selected Image Preview */}
          {imageUrl && (
            <Image
              src={imageUrl}
              alt='The image selected by the user.'
              width={250}
              height={250}
              className='aspect-square object-cover object-center'
            />
          )}
        </div>
      </CardHeader>
      <CardFooter className='flex w-full flex-col gap-4 p-2'>
        {/* id */}
        <InputController
          controllerName={`imageUpload.${index}.imageId`}
          type='number'
          label='Image ID'
          isReadOnly
          className='hidden'
        />
        {/* Image Url will be use to check if already uploaded to the server and for validation 
        for client and server side */}
        <InputController
          controllerName={imageUrlName}
          type='text'
          label={`Image Url ${index + 1}`}
          isReadOnly
          className='hidden'
        />

        {/* order number */}
        <InputController
          controllerName={orderNumberName}
          type='number'
          label='Order by'
          isReadOnly
          className='hidden'
        />
        {/* <Input
          type='text'
          label={`Image Url ${index + 1}`}
          // readOnly
          // name={nameImageURL}
          {...register(`imageUpload.${index}.imageUrl`, { required: true })}
          // className='hidden'
        /> */}
        {/* nextui Input has bug in select file */}
        {/* Image FILE type is required in formdata in order to upload new image */}
        <input
          className='hidden w-full'
          type='file'
          accept='image/png, image/jpeg, image/webp'
          name={imageUploadFileName}
          multiple={false}
          ref={imageInputRef}
          onChange={handleSelectFile}
        />
        <Button
          className='w-full rounded-xl'
          color='primary'
          onPress={handlePickClick}
          radius='none'
        >
          Browse
        </Button>
        <div className='flex w-full gap-x-3'>
          <Button
            color='secondary'
            isIconOnly
            startContent={<LuMoveLeft />}
            isDisabled={isDisabledMoveLeft}
            className=' disabled:hidden'
            onPress={handleMoveLeft}
          ></Button>
          <Button
            color='danger'
            className='w-full rounded-xl'
            onPress={handleRemove}
            isDisabled={isDisabledRemove}
            startContent={<RiDeleteBin5Line className='h-[50%] w-full' />}
            isIconOnly
          ></Button>
          <Button
            color='secondary'
            isIconOnly
            startContent={<LuMoveRight />}
            isDisabled={isDisabledMoveRight}
            className=' disabled:hidden'
            onPress={handleMoveRight}
          ></Button>
        </div>
        {/* </div> */}
      </CardFooter>
    </Card>
  );

  if (!imageUrlFieldState.invalid) {
    return imageUploadCard;
  } else {
    return (
      <Tooltip
        content={imageUrlFieldState.error?.message}
        showArrow={true}
        color='danger'
        classNames={{
          content: cn('p-3')
        }}
      >
        {imageUploadCard}
      </Tooltip>
    );
  }
};
export default ImageUploadCardV2;
