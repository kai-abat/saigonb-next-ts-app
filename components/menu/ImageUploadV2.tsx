'use client';

import useUploadImageMultiple from '@/utils/hooks/useUploadImageMultiple';
import { Button } from '@nextui-org/react';
import { ChangeEvent, useEffect } from 'react';
import {
  Control,
  FieldErrors,
  UseFieldArrayReturn,
  UseFormRegister,
  UseFormSetValue
} from 'react-hook-form';
import { FormValues } from './MenuFormV2';
import ImageUploadCardV2 from './ImageUploadCardV2';
import ImageUploadEmptyCard from '../ui/ImageUploadEmptyCard';

const ImageUploadV2 = ({
  imageUploadFieldArray,
  register,
  setValue,
  control,
  errors
}: {
  imageUploadFieldArray: UseFieldArrayReturn<FormValues, 'imageUpload', 'id'>;
  register: UseFormRegister<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  control: Control<FormValues, any>;
  errors: FieldErrors<FormValues>;
}) => {
  // react hook form useFieldArray
  const { fields, append, remove } = imageUploadFieldArray;

  return (
    <section
      id='image-upload-v2-container'
      className='flex h-max w-full flex-col flex-wrap  items-center justify-center gap-4 sm:flex-row sm:justify-start '
    >
      {fields.map((field, index) => {
        return (
          <ImageUploadCardV2
            key={field.id}
            index={index}
            register={register}
            setValue={setValue}
            remove={remove}
            control={control}
            errors={errors}
          />
        );
      })}

      <ImageUploadEmptyCard
        handler={() =>
          append({
            imageId: 0,
            imageUrl: ''
          })
        }
      />
    </section>
  );
};
export default ImageUploadV2;
