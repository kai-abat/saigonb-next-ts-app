import { signOut } from '@/utils/actions/adminAction';
import { ComponentProps } from '@/utils/types/Props';
import { Button } from '@nextui-org/react';
import { useTransition } from 'react';
import { RiLogoutBoxRLine } from 'react-icons/ri';

const ButtonSignOut = ({ showLabel = false }: ComponentProps) => {
  const [isPending, startTransition] = useTransition();

  const handleLogout = async () => {
    startTransition(async () => await signOut());
  };

  return (
    <Button
      radius='sm'
      color='secondary'
      disableRipple
      disableAnimation
      // startContent={<Spinner size="lg" color="current" />}
      isLoading={isPending}
      startContent={!isPending && <RiLogoutBoxRLine />}
      isIconOnly={!showLabel}
      onClick={handleLogout}
      // isDisabled={isPending}
    >
      {showLabel && 'Sign Out'}
    </Button>
  );
};
export default ButtonSignOut;
