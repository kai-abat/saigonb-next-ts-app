"use client";

import {
  getUser,
  initializeUser,
  setUser,
} from "@/lib/redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { AppProps, UserProfile } from "@/utils/types/Props";

const Initializer = ({
  children,
  userData,
}: {
  children: React.ReactNode;
  userData: UserProfile | undefined;
}) => {
  console.log("Initializer", userData);

  const dispatch = useAppDispatch();
  if (!userData) {
    dispatch(initializeUser());
  } else {
    dispatch(setUser(userData));
  }
  const reduxUserData = useAppSelector(getUser);
  console.log("Initializer->reduxUserData", reduxUserData);
  return <div>{children}</div>;
};
export default Initializer;
