'use client';

import {
  Divider,
  Input,
  Select,
  SelectItem,
  Spinner,
  Textarea
} from '@nextui-org/react';
import FormRow from '../form/FormRow';
import LabeledSwitch from '../nextui/LabeledSwitch';
import { useFormStatus } from 'react-dom';
import { State } from '@/utils/actions/menuActions';
import { Category } from '@/utils/types/Props';
import ImageUpload from '../ui/ImageUpload';
import PriceList from '../ui/PriceList';
import useZodFormValidation from '@/utils/hooks/useZodFormValidation';
import {
  categorySchema,
  descriptionSchema,
  isFeaturedSchema,
  menuNameSchema
} from '@/utils/zod/NewMenuSchema';
import Button from '../ui/Button';

const NewMenuFormContent = ({
  categories,
  formState
}: {
  categories: Category[];
  formState: State;
}) => {
  // const [isValid, setIsValid] = useState<boolean>(false);
  // Pending reflects the loading state of our form
  const { pending } = useFormStatus();

  // client validation
  const {
    valid: validMenuName,
    message: messageMenuName,
    onChangeEvent: onChangeMenuName,
    name: nameMenuName
  } = useZodFormValidation('menuName', menuNameSchema, 'input', formState);

  const {
    valid: validDescription,
    message: messageDescription,
    onChangeEvent: onChangeDescription,
    name: nameDescription
  } = useZodFormValidation(
    'description',
    descriptionSchema,
    'input',
    formState
  );

  const {
    valid: validCategory,
    message: messageCategory,
    onChangeSelectEvent: onChangeCategory,
    name: nameCategory
  } = useZodFormValidation('category', categorySchema, 'select', formState);

  const {
    valid: validIsFeatured,
    message: messageIsFeatured,
    onChangeEvent: onChangeIsFeatured,
    name: nameIsFeatured
  } = useZodFormValidation(
    'isFeatured',
    isFeaturedSchema,
    'checkbox',
    formState
  );

  let allValid = true;
  let formErrorMessage = '';
  if (
    !validMenuName ||
    !validIsFeatured ||
    !validDescription ||
    !validCategory
  ) {
    allValid = false;
    formErrorMessage = 'Please fill-up the missing menu details';
  }

  return (
    <>
      <FormRow>
        <Input
          color='default'
          name={nameMenuName}
          id={nameMenuName}
          type='text'
          label='Menu Name'
          radius='sm'
          className=' min-w-[300px] max-w-[500px]'
          onChange={onChangeMenuName}
          errorMessage={messageMenuName}
          isInvalid={!validMenuName}
          // errorMessage={
          //   servMessageMenuName ? servMessageMenuName : messageMenuName
          // }
          // isInvalid={!validMenuName || servMessageMenuName !== null}
        />
      </FormRow>
      <FormRow>
        <Textarea
          color='default'
          name={nameDescription}
          id={nameDescription}
          minRows={3}
          label='Description'
          radius='sm'
          className=' min-w-[300px] max-w-[500px]'
          onChange={onChangeDescription}
          errorMessage={messageDescription}
          isInvalid={!validDescription}
        />
      </FormRow>
      <FormRow>
        <Select
          color='default'
          name={nameCategory}
          id={nameCategory}
          items={categories}
          label='Category'
          className=' min-w-[300px] max-w-[500px]'
          onChange={onChangeCategory}
          errorMessage={messageCategory}
          isInvalid={!validCategory}
          placeholder='-- Select --'
          // disableAnimation
        >
          {category => (
            <SelectItem key={category.id}>{category.altName}</SelectItem>
          )}
        </Select>
      </FormRow>
      <FormRow>
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
      </FormRow>

      <FormRow errorMessage={messageIsFeatured}>
        <LabeledSwitch
          title='Featured Menu'
          name={nameIsFeatured}
          onChangeIsFeatured={onChangeIsFeatured}
          description='Featured menu will be posted in featured section.'
        />
      </FormRow>

      <FormRow>
        <Divider className='w-full' />
      </FormRow>

      {!allValid && <p>{formErrorMessage}</p>}

      <FormRow>
        <div className='flex w-full flex-col gap-4 sm:flex-row '>
          <Button
            color='secondary'
            type='submit'
            className='w-full min-w-[100px] max-w-full sm:max-w-[200px] lg:max-w-[300px]'
            isDisabled={pending || !allValid}
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
          >
            Clear
          </Button>
        </div>
      </FormRow>
    </>
  );
};
export default NewMenuFormContent;
