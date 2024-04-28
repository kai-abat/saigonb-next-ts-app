'use client';

import {
  Divider,
  Input,
  Spinner,
  Switch,
  Textarea,
  cn
} from '@nextui-org/react';
import FormRow from '../form/FormRow';
import { useFormStatus } from 'react-dom';
import { Category } from '@/utils/types/Props';
import Button from '../ui/Button';
import { Controller, useFormContext } from 'react-hook-form';
import ImageUploadV2 from './ImageUploadV2';
import PriceListV2 from './PriceListV2';
import SelectController, {
  SelectControllerItems
} from '../nextui/controllers-react-hook-form/SelectController';
import InputController from '../nextui/controllers-react-hook-form/InputController';
import { useEffect, useState } from 'react';
import { error } from 'console';
import TextAreaController from '../nextui/controllers-react-hook-form/TextAreaController';

const NewMenuFormContentV2 = ({ categories }: { categories: Category[] }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const { pending } = useFormStatus();
  const {
    register,
    formState: { errors, isValid, disabled, touchedFields },
    control,
    reset,
    clearErrors
  } = useFormContext();

  // const categoryId = categories.at(0)?.id ?? 0;
  // const [selectedCategory, setSelectedCategory] = useState<number>(categoryId);
  // const [isValid, setIsValid] = useState<boolean>(false);
  // Pending reflects the loading state of our form

  const categoryControllerItems: SelectControllerItems[] = categories.map(
    category => ({
      value: category.id.toString(),
      label: category.altName ?? category.name
    })
  );

  useEffect(() => {
    if (!isSubmit && pending) {
      setIsSubmit(true);
      clearErrors();
    }

    if (!pending && isSubmit) {
      setIsSubmit(false);
    }
  }, [pending, isSubmit, clearErrors]);

  return (
    <>
      <FormRow>
        <InputController
          controllerName={`menuName`}
          label='Menu Name'
          type='text'
          className=' min-w-[300px] max-w-[500px]'
          isAutoFocus
          showError
        />
        {/* <Input
          color='default'
          type='text'
          label='Menu Name'
          radius='sm'
          className=' min-w-[300px] max-w-[500px]'
          {...register('menuName')}
          errorMessage={errors.menuName?.message?.toString()}
        /> */}
      </FormRow>
      <FormRow>
        <TextAreaController
          controllerName='description'
          label='Description'
          className=' min-w-[300px] max-w-[500px]'
          showError
        />
        {/* <Textarea
          color='default'
          minRows={3}
          label='Description'
          radius='sm'
          className=' min-w-[300px] max-w-[500px]'
          {...register('description')}
          errorMessage={errors.description?.message?.toString()}
          // isInvalid={}
        /> */}
      </FormRow>
      <FormRow>
        <SelectController
          controllerName='category'
          items={categoryControllerItems}
          label='Select Category'
          className=' min-w-[300px] max-w-[500px]'
          showError
        />
      </FormRow>

      <FormRow>
        <span className=' font-semibold'>Cover Photos</span>
      </FormRow>
      <FormRow>
        <ImageUploadV2 />
      </FormRow>
      <FormRow>
        <span className=' font-semibold'>Price List</span>
      </FormRow>
      <FormRow>
        <PriceListV2 />
      </FormRow>

      <FormRow>
        <Controller
          control={control}
          name='isFeatured'
          defaultValue={true}
          render={({
            field: { onChange, onBlur, value, ref, name, disabled }
          }) => (
            <Switch
              onChange={e => onChange(e.target.checked)} // send value to hook form
              onBlur={onBlur} // notify when input is touched/blur
              isSelected={value}
              ref={ref}
              name={name}
              isDisabled={disabled}
              classNames={{
                base: cn(
                  'inline-flex flex-row-reverse w-full max-w-md bg-content2 hover:bg-content3 items-center',
                  'justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
                  'data-[selected=true]:border-primary'
                ),
                wrapper: 'p-0 h-4 overflow-visible',
                thumb: cn(
                  'w-6 h-6 border-2 shadow-lg',
                  'group-data-[hover=true]:border-primary',
                  //selected
                  'group-data-[selected=true]:ml-6',
                  // pressed
                  'group-data-[pressed=true]:w-7',
                  'group-data-[selected]:group-data-[pressed]:ml-4'
                )
              }}
            >
              <div className='flex flex-col gap-1'>
                <p className='text-medium'>Featured Menu</p>
                <p className='text-tiny text-default-400'>
                  Featured menu will be posted in featured section.
                </p>
              </div>
            </Switch>
          )}
        />
      </FormRow>

      <FormRow>
        <Divider className='w-full' />
      </FormRow>

      <FormRow>
        <div className='flex w-full flex-col gap-4 sm:flex-row '>
          <Button
            color='secondary'
            type='submit'
            className='w-full min-w-[100px] max-w-full sm:max-w-[200px] lg:max-w-[300px]'
            isDisabled={pending || isValid}
          >
            {!pending ? (
              'Save'
            ) : (
              <>
                <Spinner color='default' size='sm' />
                <p>Saving...</p>
              </>
            )}
          </Button>
          <Button
            type='reset'
            color='secondary'
            className='w-full min-w-[100px] max-w-full sm:max-w-[200px] lg:max-w-[300px]'
            variant='bordered'
            isDisabled={pending}
            onPress={reset}
          >
            Reset
          </Button>
        </div>
      </FormRow>
    </>
  );
};
export default NewMenuFormContentV2;
