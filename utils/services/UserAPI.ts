"use server";

import { createSupabaseServerClient } from "../supabase/server";
import { UserProfile } from "../types/Props";

export const getUserData = async (): Promise<UserProfile | undefined> => {
  const supabase = createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("getUserData: No auth user");
  if (!user) return;

  const { data: userProfileDB, error } = await supabase
    .from("UserProfile")
    .select("*")
    .eq("id", user.id)
    .single();
  console.log(
    "getUserData: No UserProfile user",
    user.id,
    user.email,
    user.role,
    userProfileDB
  );
  if (!userProfileDB) return;

  // if (error) {
  //   console.error("getUserData", error);
  //   throw new Error(error.message);
  // }

  const userProfile: UserProfile = {
    id: userProfileDB.id,
    firstName: userProfileDB.firstName ?? "",
    lastName: userProfileDB.lastName ?? "",
    email: user.email ?? "",
  };
  console.log("getUserData", userProfile);

  return userProfile;
};
