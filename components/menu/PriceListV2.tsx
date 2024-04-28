'use client';

import { Button, Input } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import PriceCardV2 from './PriceCardV2';
import { MdAdd, MdOutlineAddAPhoto } from 'react-icons/md';
import { useFieldArray, useFormContext } from 'react-hook-form';

const PriceListV2 = () => {
  const {
    control,
    formState: { errors }
  } = useFormContext();

  const priceListFieldArray = useFieldArray({
    control,
    name: 'priceList'
  });

  // react hook form useFieldArray
  const { fields, append, remove } = priceListFieldArray;
  const defaultValues = { id: 1, type: 'Hot', size: '8oz', price: 100 };

  return (
    <div
      id='image-upload-container'
      className='flex h-max flex-col flex-wrap items-center justify-center gap-3 sm:flex-row sm:justify-start '
    >
      {fields.map((field, index) => {
        return (
          <PriceCardV2
            key={field.id}
            index={index}
            remove={remove}
            isDisabledRemove={index == 0 && fields.length - 1 === 0}
          />
        );
      })}

      <div
        className='flex h-80 w-60 cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-content3 hover:border-secondary'
        onClick={() => append({ type: 'Hot', size: '12oz', price: 100 })}
      >
        <MdAdd className='h-full w-full fill-stone-300' />
      </div>

      <Input
        type='text'
        readOnly
        id='price-number'
        name='price-number'
        className='hidden'
      />
    </div>
  );
};
export default PriceListV2;
