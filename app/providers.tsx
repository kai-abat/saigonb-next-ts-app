// app/providers.tsx
"use client";

import { UserProfile } from "@/utils/types/Props";
import { useRouter } from "next/navigation";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import ReduxStoreProvider from "@/components/provider/ReduxStoreProvider";

export function Providers({
  children,
  userData,
}: {
  children: React.ReactNode;
  userData: UserProfile | undefined;
}) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <ThemeProvider
        attribute="class"
        enableSystem={true}
        defaultTheme="system"
      >
        <ReduxStoreProvider userData={userData}>{children}</ReduxStoreProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
}
