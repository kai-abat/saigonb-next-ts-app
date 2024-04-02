import { z } from "zod";
import { zfd } from "zod-form-data";

export const NewMenuSchema = z.object({
  menuName: z
    .string()
    .min(5, "Menu name should be at least 5 characters")
    .max(30, "Menu name should be at most 30 characters"),
  description: z
    .string()
    .min(10, "Menu description should be at least 10 characters")
    .max(100, "Menu description should be at most 100 characters"),
  category: z
    .number()
    .nonnegative("Please select a category")
    .min(1, "Please select a category"),
  isFeatured: z.boolean(),
});

export type NewMenuType = z.infer<typeof NewMenuSchema>;
