"use client";
import { useAppSelector, useAppStore } from "@/lib/redux/hooks";
import { getUser } from "@/lib/redux/features/userSlice";
import { UserProfile } from "@/utils/types/Props";
import { Avatar } from "@nextui-org/react";
import { BsCamera } from "react-icons/bs";

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
      <span className="capitalize">{userData.firstName}</span>
    </div>
  );
};
export default UserProfileHeader;
