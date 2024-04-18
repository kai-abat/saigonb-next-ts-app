import { Avatar, Button, Spinner, Tooltip } from '@nextui-org/react';
import { BsCamera } from 'react-icons/bs';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { signOut } from '@/utils/actions/adminAction';
import { useTransition } from 'react';
import { UserProfile } from '@/utils/types/Props';

const UserProfileHeader = ({
  userData
}: {
  userData: UserProfile | undefined;
}) => {
  const [isPending, startTransition] = useTransition();

  if (!userData) return;

  const handleLogout = async () => {
    startTransition(async () => await signOut());
  };

  return (
    <div className='flex items-center justify-end gap-x-3 font-medium'>
      <Avatar
        showFallback
        src='https://images.unsplash.com/broken'
        fallback={
          <BsCamera
            className='h-6 w-6 animate-pulse text-default-500'
            fill='currentColor'
            size={20}
          />
        }
      />
      <div className='hidden lg:flex lg:flex-col lg:items-start lg:justify-center lg:gap-0 '>
        <div className='text-sm font-medium capitalize'>
          {userData.firstName}
        </div>
        <div className='align-text-top text-xs font-light capitalize'>
          {userData.position}
        </div>
      </div>
      <div className='hidden md:flex'>
        <Tooltip
          content='Logout'
          showArrow
          color='secondary'
          radius='sm'
          disableAnimation
          closeDelay={200}
        >
          <Button
            radius='sm'
            color='secondary'
            disableRipple
            disableAnimation
            // startContent={<Spinner size="lg" color="current" />}
            isLoading={isPending}
            startContent={!isPending && <RiLogoutBoxRLine />}
            isIconOnly
            onClick={handleLogout}
            // isDisabled={isPending}
          ></Button>
        </Tooltip>
      </div>
    </div>
  );
};
export default UserProfileHeader;
