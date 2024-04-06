"use client";
import { useAppSelector, useAppStore } from "@/lib/redux/hooks";
import { getUser } from "@/lib/redux/features/userSlice";
import { Avatar, Button, Tooltip } from "@nextui-org/react";
import { BsCamera } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";

const UserProfileHeader = () => {
  const userData = useAppSelector(getUser);

  if (!userData) return;

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
        <Tooltip content="Logout" showArrow color="secondary" radius="sm">
          <Button
            radius="sm"
            color="secondary"
            startContent={<RiLogoutBoxRLine />}
            isIconOnly
          ></Button>
        </Tooltip>
      </div>
    </div>
  );
};
export default UserProfileHeader;
