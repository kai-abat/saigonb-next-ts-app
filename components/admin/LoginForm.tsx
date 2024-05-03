'use client';
import { useState } from 'react';
import { useFormState } from 'react-dom';
import FormRow from '../form/FormRow';
import { Input } from '@nextui-org/input';
import { MdOutlineSupervisedUserCircle } from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Divider } from '@nextui-org/react';
import Title from '../ui/Title';
import { RiLockPasswordLine } from 'react-icons/ri';
import { State, signIn } from '@/utils/actions/adminAction';
import SubmitButton from '../form/SubmitButton';

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [state, formAction] = useFormState<State, FormData>(signIn, null);

  const bool = state !== null && state.isValid;

  return (
    <section className=' flex w-3/4 flex-col items-start justify-start gap-3 rounded-xl border-2 border-stone-300  bg-content3 px-8 py-5 shadow-md shadow-stone-300 dark:shadow-none'>
      <Title>Sign In</Title>
      <p>We&apos;re happy to see you back again!</p>
      <Divider className='w-full' />

      <form className='flex w-full flex-col gap-5' action={formAction}>
        <FormRow>
          <Input
            // color="primary"
            startContent={
              <MdOutlineSupervisedUserCircle className='pointer-events-none flex-shrink-0 text-2xl text-default-400' />
            }
            type='text'
            label='Email'
            isRequired
            isClearable
            radius='sm'
            variant='faded'
            className=''
            labelPlacement='outside'
            name='email'
            placeholder='you@example.com'
          />
        </FormRow>
        <FormRow>
          <Input
            labelPlacement='outside'
            // color="primary"
            startContent={
              <RiLockPasswordLine className='pointer-events-none flex-shrink-0 text-2xl text-default-400' />
            }
            isRequired
            className='w-full'
            radius='sm'
            label='Password'
            variant='faded'
            placeholder='••••••••'
            endContent={
              <button
                className='focus:outline-none'
                type='button'
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <FaEyeSlash className='text-2xl text-default-600 transition-colors hover:text-default-900' />
                ) : (
                  <FaEye className='text-2xl text-default-600 transition-colors hover:text-default-900' />
                )}
              </button>
            }
            type={isVisible ? 'text' : 'password'}
            name='password'
          />
        </FormRow>

        {state && state.status === 'error' && (
          <FormRow>
            <p className=' text-sm text-danger'>{state.message}</p>
          </FormRow>
        )}

        <FormRow>
          <SubmitButton
            label='Sign In'
            labelLoading='Signing In'
            className='w-full'
          />
        </FormRow>
      </form>
    </section>
  );
};
export default LoginForm;
