import LoginForm from '@/components/admin/LoginForm';
import Logo from '@/components/layout/Logo';
import CurvyContainer from '@/components/ui/CurvyContainer';
import { getUserData } from '@/utils/services/UserAPI';
import { Image } from '@nextui-org/react';
import { redirect } from 'next/navigation';

const LoginPage = async () => {
  const userData = await getUserData();
  // Temporary go to home page if already authenticated
  if (userData) redirect('/');

  return (
    <section className='w-ful mt-4 flex min-h-[100dvh] bg-content3/40 '>
      <section className='container-curve-shape hidden shrink grow-[3] p-0 md:flex md:items-center md:justify-center'>
        <div className="h-full w-full bg-[url('/images/login-bg-1.jpg')] bg-cover bg-center bg-no-repeat object-fill">
          <div className=' h-full w-full bg-primary/20' />
        </div>
      </section>

      <section className='-mt-28 flex shrink grow basis-auto items-center justify-center self-center md:mt-0'>
        <LoginForm />
      </section>
    </section>
  );
};
export default LoginPage;
