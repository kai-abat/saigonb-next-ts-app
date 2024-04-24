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
  Control,
  Controller,
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
  UseFormSetValue
} from 'react-hook-form';
import { FormValues } from './MenuFormV2';

const ImageUploadCardV2 = ({
  index,
  register,
  setValue,
  remove,
  control,
  errors
}: {
  index: number;
  register: UseFormRegister<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  remove: UseFieldArrayRemove;
  control: Control<FormValues, any>;
  errors: FieldErrors<FormValues>;
}) => {
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [imageUrlErrorMsg, setImageUrlErrorMsg] = useState<
    string | undefined
  >();
  const { handlePickClick, handleImageChange, imageInputRef, selectedFile } =
    useUploadImage();

  // temporary boolean for error message validation
  const validImageURL = true;

  // if (errors.imageUpload[index] && errors.imageUpload.length >= index + 1) {
  //   imageUrlErrorMsg = errors.imageUpload.at(index)?.imageUrl?.message;
  // }

  useEffect(() => {
    console.log('Client: imageUrlErrorMsg:', imageUrlErrorMsg);
  }, [imageUrlErrorMsg]);

  useEffect(() => {
    if (!selectedFile) {
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setImageUrl(objectUrl);
    setValue(`imageUpload.${index}.imageUrl`, objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile, index, setValue]);

  function handleSelectFile(e: ChangeEvent<HTMLInputElement>) {
    handleImageChange(e);
    // if (servMessageImageURL) servMessageImageURL = undefined;
  }

  function handleRemove() {
    remove(index);
  }

  // className={`h-96 w-60 gap-y-4 rounded-xl border-2 bg-content3 p-3
  const imageUploadCard = (
    <Card
      className={`h-[35rem] w-60 gap-y-4 rounded-xl border-2 bg-content3 p-3
${
  !imageUrlErrorMsg
    ? 'border-primary hover:border-secondary'
    : 'border-danger hover:border-danger/70'
} `}
    >
      <CardHeader className=' p-2'>
        {/* Image Preview Fallback */}
        <div className=' flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border-2 border-secondary text-center '>
          {!imageUrl && (
            <Image
              src={getFallbackImagePath()}
              alt='No image selected yet.'
              width={250}
              height={250}
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
        <Controller
          control={control}
          name={`imageUpload.${index}.imageId`}
          render={({ field, fieldState }) => {
            return (
              <Input
                onChange={field.onChange}
                onBlur={field.onBlur}
                name={field.name}
                value={field.value.toString()}
                ref={field.ref}
                isDisabled={field.disabled}
                type='number'
                // readOnly
                label='Image ID'
                // {...register(`imageUpload.${index}.id`, { valueAsNumber: true })}
                // className='hidden'
              />
            );
          }}
        />
        {/* Image Url will be use to check if already uploaded to the server and for validation 
        for client and server side */}
        <Controller
          control={control}
          name={`imageUpload.${index}.imageUrl`}
          render={({ field, fieldState }) => {
            setImageUrlErrorMsg(fieldState.error?.message);
            return (
              <Input
                onChange={field.onChange}
                onBlur={field.onBlur}
                name={field.name}
                value={field.value}
                ref={field.ref}
                isDisabled={field.disabled}
                type='text'
                // readOnly
                label={`Image Url ${index + 1}`}
                // {...register(`imageUpload.${index}.id`, { valueAsNumber: true })}
                // className='hidden'
              />
            );
          }}
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
          accept='image/png, image/jpeg'
          multiple
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
        <Button
          color='danger'
          className='w-full rounded-xl'
          onPress={handleRemove}
          // isDisabled={disabledRemoveBtn}
        >
          Remove {index}
        </Button>
        {/* </div> */}
      </CardFooter>
    </Card>
  );

  if (!imageUrlErrorMsg) {
    return imageUploadCard;
  } else {
    return (
      <Tooltip
        content={imageUrlErrorMsg}
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
