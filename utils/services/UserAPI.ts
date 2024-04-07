"use server";

import { createSupabaseServerClient } from "../supabase/server";
import { UserProfile } from "../types/Props";

export const getUserData = async (): Promise<UserProfile | undefined> => {
  const supabase = createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { data: userProfileDB, error } = await supabase
    .from("UserProfile")
    .select("*")
    .eq("id", user.id)
    .single();

  if (!userProfileDB) return;

  // if (error) {
  //   console.error("getUserData", error);
  //   throw new Error(error.message);
  // }

  const userProfile: UserProfile = {
    id: userProfileDB.id,
    firstName: userProfileDB.firstName ?? "",
    lastName: userProfileDB.lastName ?? "",
    position: userProfileDB.position ?? "Barista",
    email: user.email ?? "",
  };

  return userProfile;
};
