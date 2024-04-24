'use client';
import {
  extractErrorMessge,
  extractServerErrorMessage,
  getFallbackImagePath
} from '@/utils/Helper';
import useUploadImage from '@/utils/hooks/useUploadImage';
import useZodClientValidation from '@/utils/hooks/useZodFormValidation';
import { State } from '@/utils/actions/menuActions';
import { imageURLSchema } from '@/utils/zod/NewMenuSchema';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image as ImageUI,
  Input,
  Tooltip,
  cn
} from '@nextui-org/react';
import Image from 'next/image';
import { ChangeEvent, Dispatch, SetStateAction, useEffect } from 'react';

const ImageUploadCard = ({
  imageData,
  setImageURLList,
  formState,
  disabledRemoveBtn
}: {
  imageData: {
    id: number;
    imageUrl: string;
    orderNumber: number;
  };
  formState: State;
  setImageURLList: Dispatch<
    SetStateAction<
      {
        id: number;
        imageUrl: string;
        orderNumber: number;
      }[]
    >
  >;
  disabledRemoveBtn: boolean;
}) => {
  const { handlePickClick, handleImageChange, imageInputRef, selectedFile } =
    useUploadImage();

  const nameImageID = `image-id-${imageData.id}`;
  const nameImageURL = `image-url-${imageData.id}`;
  const nameImageFile = `image-file-${imageData.id}`;
  const nameImageOrder = `image-order-${imageData.id}`;

  const {
    valid: validImageURL,
    message: messageImageURL,
    onBrowseImageStateRender
  } = useZodClientValidation(nameImageURL, imageURLSchema, 'inpu', formState);

  let servMessageImageURL = extractServerErrorMessage(
    extractErrorMessge(formState, nameImageURL)
  );

  useEffect(() => {
    if (!selectedFile) {
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setImageURLList(prevState =>
      prevState.map(state =>
        state.id === imageData.id ? { ...state, imageUrl: objectUrl } : state
      )
    );

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile, imageData.id, setImageURLList]);

  useEffect(() => {
    if (imageData.imageUrl.length > 0) {
      onBrowseImageStateRender(imageData.imageUrl);
    }
  }, [imageData.imageUrl, onBrowseImageStateRender]);

  function handleCloseCard() {
    setImageURLList(prevState =>
      prevState
        .filter(state => state.id !== imageData.id)
        .map((state, index) => ({
          ...state,
          id: index + 1,
          orderNumber: index + 1
        }))
    );
  }

  function handleSelectFile(e: ChangeEvent<HTMLInputElement>) {
    handleImageChange(e);
    if (servMessageImageURL) servMessageImageURL = undefined;
  }

  function handleOrderByChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const newOrderBy = e.target.value;
    setImageURLList(prevState =>
      prevState.map(state =>
        state.id === imageData.id
          ? { ...state, orderNumber: Number(newOrderBy) }
          : state
      )
    );
  }

  const imageUploadCard = (
    <Card
      className={`h-96 w-60 gap-y-4 rounded-xl border-2 bg-content3 p-3
${
  validImageURL
    ? 'border-primary hover:border-secondary'
    : 'border-danger hover:border-danger/70'
} `}
    >
      <CardHeader className=' p-2'>
        <div className=' flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border-2 border-secondary text-center '>
          {!imageData.imageUrl && (
            <Image
              src={getFallbackImagePath()}
              alt='No image selected yet.'
              width={250}
              height={250}
              className='aspect-square w-full object-cover object-center'
            />
          )}
          {imageData.imageUrl && (
            <Image
              src={imageData.imageUrl}
              alt='The image selected by the user.'
              width={250}
              height={250}
              className='aspect-square object-cover object-center'
            />
          )}
        </div>
      </CardHeader>
      <CardFooter className='flex w-full flex-col gap-4 p-2'>
        {/* <div className="flex flex-col gap-4 w-full"> */}
        <Input
          type='number'
          readOnly
          value={imageData.id.toString()}
          name={nameImageID}
          className='hidden'
        />
        {/* Image Url will be use to check if already uploaded to the server and for validation 
        for client and server side */}
        <Input
          type='text'
          value={imageData.imageUrl}
          readOnly
          name={nameImageURL}
          className='hidden'
        />
        {/* nextui Input has bug in select file */}
        {/* Image FILE type is required in formdata in order to upload new image */}
        <input
          className='hidden w-full'
          type='file'
          accept='image/png, image/jpeg'
          id={`image-file-${imageData.id}`}
          name={nameImageFile}
          ref={imageInputRef}
          onChange={handleSelectFile}
        />
        <Input
          type='number'
          label='Order By'
          isReadOnly
          radius='sm'
          name={nameImageOrder}
          value={imageData.orderNumber.toString()}
          onChange={handleOrderByChange}
          min='1'
          max='10'
          className='hidden'
        />
        <Button
          className='w-full rounded-xl'
          color='primary'
          name={`select-image-btn-${imageData.id}`}
          onPress={handlePickClick}
          radius='none'
        >
          Browse
        </Button>
        <Button
          color='danger'
          name={`delete-btn-${imageData.id}`}
          onPress={handleCloseCard}
          className='w-full rounded-xl'
          isDisabled={disabledRemoveBtn}
        >
          Remove
        </Button>
        {/* </div> */}
      </CardFooter>
    </Card>
  );

  if (!validImageURL) {
    return (
      <Tooltip
        content={messageImageURL}
        showArrow={true}
        color='danger'
        classNames={{
          content: cn('p-3')
        }}
      >
        {imageUploadCard}
      </Tooltip>
    );
  } else {
    return imageUploadCard;
  }
};
export default ImageUploadCard;
