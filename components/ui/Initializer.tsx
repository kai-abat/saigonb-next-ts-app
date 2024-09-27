'use client';

import { initializePostPreview } from '@/lib/redux/features/postPreviewSlice';
import {
  getUser,
  initializeUser,
  setUser
} from '@/lib/redux/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { ComponentProps, UserProfile } from '@/utils/types/Props';

const Initializer = ({
  children,
  userData
}: {
  children: React.ReactNode;
  userData: UserProfile | undefined;
}) => {
  console.log('Initializer', userData);

  const dispatch = useAppDispatch();
  if (!userData) {
    dispatch(initializeUser()); // redux initialize user
  } else {
    dispatch(setUser(userData));
  }
  dispatch(initializePostPreview());

  const reduxUserData = useAppSelector(getUser);
  console.log('Initializer->reduxUserData', reduxUserData);
  return <div>{children}</div>;
};
export default Initializer;
