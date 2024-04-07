"use server";

import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "../supabase/server";
import { revalidatePath } from "next/cache";

export type State = {
  status: "error" | "success";
  isValid: boolean;
  message: string;
  errors?: Array<{
    path: string;
    message: string;
  }>;
} | null;

export const signIn = async (state: State, formData: FormData) => {
  // we're gonna put a delay in here to simulate some kind of data processing like persisting data
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const supabase = createSupabaseServerClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return {
      status: "error",
      isValid: false,
      message:
        "Sorry, your email and password was incorrect. Please double-check your account.",
    };
  }

  revalidatePath("/", "layout");
  redirect("/");
};

export const signOut = async () => {
  // we're gonna put a delay in here to simulate some kind of data processing like persisting data
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const supabase = createSupabaseServerClient();

  await supabase.auth.signOut();

  // For Debugging only
  // const { data: sessionData } = await supabase.auth.getSession();
  // const { data: userData } = await supabase.auth.getUser();
  // console.log("signout", sessionData, userData);

  revalidatePath("/", "layout");
  redirect("/");
};
