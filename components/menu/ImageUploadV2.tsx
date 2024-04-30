'use client';

import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import ImageUploadCardV2 from './ImageUploadCardV2';
import ImageUploadEmptyCard from '../ui/ImageUploadEmptyCard';

const ImageUploadV2 = () => {
  const { control, setValue } = useFormContext();

  const imageUploadFieldArray = useFieldArray({
    control,
    name: 'imageUpload'
  });

  // react hook form useFieldArray
  const { fields, append, remove, move } = imageUploadFieldArray;
  // move()

  useEffect(() => {
    fields.forEach((field, index) =>
      setValue(`imageUpload.${index}.orderNumber`, index + 1)
    );
  }, [remove, fields, setValue]);

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
            remove={remove}
            move={move}
            lastIndex={fields.length - 1}
          />
        );
      })}

      <ImageUploadEmptyCard
        handler={() =>
          append({
            imageId: 0,
            imageUrl: '',
            orderNumber: fields.length + 1
          })
        }
      />
    </section>
  );
};
export default ImageUploadV2;
