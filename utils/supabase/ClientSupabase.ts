import { Database } from "../types/supabase";
import { createClient } from "./client";

export const getSupabaseClient = () => {
  return createClient();
};
