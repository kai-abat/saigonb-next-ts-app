'use client';
import { newMenuAction, State } from '@/utils/actions/menuActions';
import { useFormState } from 'react-dom';
import Title from '../ui/Title';
import { useEffect } from 'react';
import { NewMenuProps } from '@/utils/types/ClientProps';
import NewMenuFormContent from './NewMenuFormContent';
import { useRouter } from 'next/navigation';

const MenuForm = ({ categories = [], menu }: NewMenuProps) => {
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
    }
    if (state.status === 'success') {
      alert(JSON.stringify(state));
      // Todo: uncomment this after development
      // router.push('/menu/all');
    }
  }, [state, router]);

  return (
    <>
      <header>
        <Title capitalize>New Menu</Title>
      </header>
      <main className=''>
        <form className='flex flex-col gap-3' action={formAction}>
          <NewMenuFormContent categories={categories} formState={state} />
        </form>
      </main>
    </>
  );
};
export default MenuForm;
