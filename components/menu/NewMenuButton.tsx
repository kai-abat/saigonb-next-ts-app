'use client';

import { Button, Link } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { VscNewFile } from 'react-icons/vsc';

const NewMenuButton = () => {
  const router = useRouter();

  return (
    <div className='flex w-full items-center justify-center sm:justify-end '>
      <Button
        color='secondary'
        size='lg'
        className='w-full max-w-[300px]'
        startContent={<VscNewFile />}
        href='/menu/menu-form'
        as={Link}
      >
        New Menu
      </Button>
    </div>
  );
};
export default NewMenuButton;
