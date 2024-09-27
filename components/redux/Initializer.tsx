'use client';

import { initializePostPreview } from '@/lib/redux/features/postPreviewSlice';
import {
  getUser,
  initialState as initialUser,
  setUser,
  updateEmail
} from '@/lib/redux/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { UserProfile } from '@/utils/types/Props';

type Props = {
  children: React.ReactNode;
  userData: UserProfile | undefined;
};

const Initializer = ({ children, userData }: Props) => {
  const dispatch = useAppDispatch();
  if (!userData) {
    dispatch(setUser(initialUser)); // redux initialize user
  } else {
    dispatch(setUser(userData));
  }
  dispatch(initializePostPreview());

  const reduxUserData = useAppSelector(getUser);

  return <div>{children}</div>;
};
export default Initializer;
