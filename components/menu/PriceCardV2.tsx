'use client';
import { MENU_SIZE, MENU_TYPE } from '@/utils/services/PriceData';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Select,
  SelectItem
} from '@nextui-org/react';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { UseFieldArrayRemove, useFormContext } from 'react-hook-form';
import SelectController from '../nextui/controllers-react-hook-form/SelectController';
import InputController from '../nextui/controllers-react-hook-form/InputController';
import { LiaTrashSolid } from 'react-icons/lia';
import { RiDeleteBin5Line } from 'react-icons/ri';
import ErrorMessage from '../form/ErrorMessage';

const PriceCardV2 = ({
  index,
  remove,
  isDisabledRemove
}: {
  index: number;
  remove: UseFieldArrayRemove;
  isDisabledRemove: boolean;
}) => {
  const {
    getFieldState,
    clearErrors,
    formState: { errors }
  } = useFormContext();
  const priceListIDName = `priceList.${index}.priceId`;
  const priceListTypeName = `priceList.${index}.type`;
  const priceListSizeName = `priceList.${index}.size`;
  const priceListPriceName = `priceList.${index}.price`;

  const priceListTypeFieldState = getFieldState(priceListTypeName);
  const priceListSizeFieldState = getFieldState(priceListSizeName);

  let errorMsg = '';

  if (priceListTypeFieldState.invalid && priceListSizeFieldState.invalid) {
    const isIncorrectType =
      priceListTypeFieldState.error?.message ===
      'Please enter correct price type.';
    const isIncorrectSize =
      priceListSizeFieldState.error?.message ===
      'Please enter correct price size.';

    // errorMsg = ` isIncorrectType: ${isIncorrectType} : ${priceListTypeFieldState.error?.message} , isIncorrectSize: ${isIncorrectSize} : ${priceListSizeFieldState.error?.message}`;
    errorMsg =
      isIncorrectType && isIncorrectSize
        ? 'Please enter correct price type and size!'
        : '';
  }

  return (
    <Card
      className={`min-h-80 w-60 border-2 bg-content3 p-3 transition-all duration-400 ease-in 
    ${!priceListTypeFieldState.invalid && !priceListSizeFieldState.invalid ? 'border-primary hover:border-secondary' : 'border-danger hover:border-danger/70'}`}
    >
      <CardBody>
        <div className='flex flex-col gap-3'>
          <InputController
            label='ID'
            controllerName={priceListIDName}
            type='number'
            isReadOnly
            className='hidden max-w-xs'
          />
          {/* <Input label="ID" value={price.id.toString()} /> */}
          <SelectController
            items={MENU_TYPE}
            controllerName={priceListTypeName}
            label='Select Type'
            className='max-w-xs'
            // showError
          />

          <SelectController
            items={MENU_SIZE}
            controllerName={priceListSizeName}
            label='Select Type'
            className='max-w-xs'
            // showError
          />

          <InputController
            controllerName={priceListPriceName}
            label='Price'
            type='number'
            className='max-w-xs'
            showError
          />
          <ErrorMessage message={errorMsg} />
        </div>
      </CardBody>
      <CardFooter>
        <Button
          color='danger'
          className='w-full'
          isDisabled={isDisabledRemove}
          onPress={() => remove(index)}
          startContent={<RiDeleteBin5Line className='h-[50%] w-full' />}
        >
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
};
export default PriceCardV2;
