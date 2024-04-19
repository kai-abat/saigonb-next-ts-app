import { Avatar, Button, Spinner, Tooltip } from '@nextui-org/react';
import { BsCamera } from 'react-icons/bs';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { signOut } from '@/utils/actions/adminAction';
import { useTransition } from 'react';
import { UserProfile } from '@/utils/types/Props';
import ButtonSignOut from './ButtonSignOut';

const UserProfileHeader = ({
  userData
}: {
  userData: UserProfile | undefined;
}) => {
  if (!userData) return;

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
          content='Sign Out'
          showArrow
          color='secondary'
          radius='sm'
          disableAnimation
          closeDelay={200}
        >
          <ButtonSignOut />
        </Tooltip>
      </div>
    </div>
  );
};
export default UserProfileHeader;
