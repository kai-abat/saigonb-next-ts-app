import { Avatar, Button, Spinner, Tooltip } from "@nextui-org/react";
import { BsCamera } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { signOut } from "@/utils/actions/adminAction";
import { useTransition } from "react";
import { UserProfile } from "@/utils/types/Props";

const UserProfileHeader = ({
  userData,
}: {
  userData: UserProfile | undefined;
}) => {
  const [isPending, startTransition] = useTransition();

  if (!userData) return;

  const handleLogout = async () => {
    startTransition(async () => await signOut());
  };

  return (
    <div className="flex gap-x-3 justify-end items-center font-medium">
      <Avatar
        showFallback
        src="https://images.unsplash.com/broken"
        fallback={
          <BsCamera
            className="animate-pulse w-6 h-6 text-default-500"
            fill="currentColor"
            size={20}
          />
        }
      />
      <div className="hidden lg:flex lg:flex-col lg:gap-0 lg:justify-center lg:items-start ">
        <div className="capitalize font-medium text-sm">
          {userData.firstName}
        </div>
        <div className="capitalize font-light align-text-top text-sm">
          {userData.position}
        </div>
      </div>
      <div className="hidden md:flex">
        <Tooltip
          content="Logout"
          showArrow
          color="secondary"
          radius="sm"
          disableAnimation
          closeDelay={200}
        >
          <Button
            radius="sm"
            color="secondary"
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
