import { ComponentProps } from '@/utils/types/Props';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { useTransition } from 'react';
import { RiLogoutBoxRLine } from 'react-icons/ri';

const ButtonSignIn = ({ showLabel = false }: ComponentProps) => {
  return (
    <Button as={Link} radius='sm' color='secondary' href='/admin/login'>
      {showLabel && 'Sign In'}
    </Button>
  );
};
export default ButtonSignIn;
