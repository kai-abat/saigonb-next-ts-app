// import { cache } from "react";
// import { RequestCookies } from "@edge-runtime/cookies";
// import { headers } from "next/headers";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { cache } from "react";

// export const createServerCompClient = () => {
//   const cookieStore = cookies();
//   return createServerComponentClient<Database>({
//     cookies: () => cookieStore,
//   });
// };

// export const createServerCompClient = cache(() => {
//   const cookieStore = new RequestCookies(headers()) as any;
//   return createServerComponentClient<Database>({
//     cookies: () => cookieStore,
//   });
// });

export const createServerCompClient = cache(() => {
  const cookieStore = cookies();
  return createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
});
