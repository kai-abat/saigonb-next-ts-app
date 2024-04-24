'use client';

import {
  Divider,
  Input,
  Select,
  SelectItem,
  Selection,
  Spinner,
  Switch,
  Textarea,
  cn
} from '@nextui-org/react';
import FormRow from '../form/FormRow';
import { useFormStatus } from 'react-dom';
import { Category } from '@/utils/types/Props';
import Button from '../ui/Button';
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
  UseFormReset
} from 'react-hook-form';
import { FormValues } from './MenuFormV2';
import { ChangeEvent, useState } from 'react';

const NewMenuFormContentV2 = ({
  categories,
  register,
  isValid,
  errors,
  reset,
  control
}: {
  categories: Category[];
  register: UseFormRegister<FormValues>;
  isValid: boolean;
  errors: FieldErrors<FormValues>;
  reset: UseFormReset<FormValues>;
  control: Control<FormValues, any>;
}) => {
  // const categoryId = categories.at(0)?.id ?? 0;
  // const [selectedCategory, setSelectedCategory] = useState<number>(categoryId);
  // const [isValid, setIsValid] = useState<boolean>(false);
  // Pending reflects the loading state of our form
  const { pending } = useFormStatus();

  return (
    <>
      <FormRow>
        <Input
          color='default'
          type='text'
          label='Menu Name'
          radius='sm'
          className=' min-w-[300px] max-w-[500px]'
          {...register('menuName')}
          errorMessage={errors.menuName?.message}
          // isInvalid={errors.menuName?.message}
          autoFocus
          // errorMessage={
          //   servMessageMenuName ? servMessageMenuName : messageMenuName
          // }
          // isInvalid={!validMenuName || servMessageMenuName !== null}
        />
      </FormRow>
      <FormRow>
        <Textarea
          color='default'
          minRows={3}
          label='Description'
          radius='sm'
          className=' min-w-[300px] max-w-[500px]'
          {...register('description')}
          errorMessage={errors.description?.message}
          // isInvalid={}
        />
      </FormRow>
      <FormRow>
        <Controller
          control={control}
          name='category'
          render={({ field: { onBlur, name, ref, onChange, value } }) => {
            const handleSelectionChange = (
              e: ChangeEvent<HTMLSelectElement>
            ) => {
              onChange(e.target.value);
              // setSelectedCategory(e.target.value);
            };

            return (
              <Select
                ref={ref}
                onBlur={onBlur}
                name={name}
                onChange={handleSelectionChange}
                label='Select Category'
                className=' min-w-[300px] max-w-[500px]'
                errorMessage={errors.category?.message}
                items={categories}
                selectedKeys={[value]}
                // onSelectionChange={setSelectedCategory}
                // defaultSelectedKeys={[value]}
                // {...register('category')}
              >
                {/* {category => (
              <SelectItem key={category.id} value={category.name}>
                {category.altName}
              </SelectItem>
            )} */}
                {category => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                )}
                {/* {categories.map(category => (
                  <SelectItem key={category.name} value={category.name}>
                    {category.altName}
                  </SelectItem>
                ))} */}
              </Select>
            );
          }}
        />
      </FormRow>
      {/* <FormRow>
        <span className=' font-semibold'>Cover Photos</span>
      </FormRow>
      <FormRow>
        <ImageUpload formState={formState} />
      </FormRow>
      <FormRow>
        <span className=' font-semibold'>Price List</span>
      </FormRow>
      <FormRow>
        <PriceList />
      </FormRow> */}

      <FormRow>
        <Controller
          control={control}
          name='isFeatured'
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Switch
              onChange={onChange} // send value to hook form
              onBlur={onBlur} // notify when input is touched/blur
              isSelected={value}
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
            isDisabled={pending}
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
            Clear
          </Button>
        </div>
      </FormRow>
    </>
  );
};
export default NewMenuFormContentV2;
