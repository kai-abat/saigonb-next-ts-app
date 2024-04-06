"use client";
import { setUser } from "@/lib/redux/features/userSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import { AppStore, makeStore } from "@/lib/redux/store";
import { UserProfile } from "@/utils/types/Props";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";

export default function ReduxStoreProvider({
  children,
  userData,
}: {
  children: React.ReactNode;
  userData: UserProfile | undefined;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    if (userData) {
      storeRef.current.dispatch(setUser(userData));
    }
  }

  useEffect(() => {
    if (storeRef.current != null) {
      // configure listeners using the provided defaults
      // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
      const unsubscribe = setupListeners(storeRef.current.dispatch);
      return unsubscribe;
    }
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
