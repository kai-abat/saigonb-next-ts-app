'use client';
import {
  FieldErrors,
  useForm,
  UseFormRegister,
  FieldPath
} from 'react-hook-form';
import { newMenuAction, State } from '@/utils/actions/menuActions';
import { useFormState } from 'react-dom';
import Title from '../ui/Title';
import { useEffect, useState } from 'react';
import { NewMenuProps } from '@/utils/types/ClientProps';
import { useRouter } from 'next/navigation';
import NewMenuFormContentV2 from './NewMenuFormContentV2';
import { zodResolver } from '@hookform/resolvers/zod';
import { NewMenuFormDataSchema } from '@/utils/zod/NewMenuSchema';
import { Category } from '@/utils/types/Props';

export interface FormValues {
  menuName: string;
  description: string;
  category: number;
  isFeatured: boolean;
}

const MenuFormV2 = ({ categories = [], menu }: NewMenuProps) => {
  const [clientSideValidation, setClientSideValidation] = useState(true);

  // get 1st category
  const category1st = categories[0].id;
  // react hook form
  const {
    register,
    formState: { isValid, errors },
    setError,
    reset,
    control
  } = useForm<FormValues>({
    mode: 'all',
    defaultValues: {
      menuName: '',
      description: '',
      // category: category1st,
      isFeatured: true
    },
    resolver: clientSideValidation
      ? zodResolver(NewMenuFormDataSchema)
      : undefined
  });

  // useFormState
  const menuId = menu?.id;
  const menuAction = newMenuAction.bind(null, menuId);
  const [state, formAction] = useFormState<State, FormData>(menuAction, null);
  const router = useRouter();

  // Show the return value/state of server action newMenuAction
  useEffect(() => {
    if (!state) {
      return;
    }
    // In case our form action returns `error` we can now `setError`s
    if (state.status === 'error') {
      console.log('ERRORS!:', state.errors);
      state.errors?.forEach(error => {
        setError(error.path as FieldPath<FormValues>, {
          message: error.message
        });
      });
    }

    if (state.status === 'success') {
      alert(JSON.stringify(state));
      // Todo: uncomment this after development
      // router.push('/menu/all');
    }
  }, [state, setError, router]);

  return (
    <>
      <header>
        <Title capitalize>New Menu</Title>
      </header>
      <main className=''>
        <form className='flex flex-col gap-3' action={formAction}>
          <NewMenuFormContentV2
            categories={categories}
            register={register}
            isValid={isValid}
            errors={errors}
            reset={reset}
            control={control}
          />
        </form>
      </main>
    </>
  );
};
export default MenuFormV2;
