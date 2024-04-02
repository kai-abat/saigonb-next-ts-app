"use server";

import { NewMenuSchema } from "../zod/NewMenuSchema";
import { ZodError } from "zod";

export type State =
  | {
      status: "success";
      message: string;
    }
  | {
      status: "error";
      message: string;
      errors?: Array<{
        path: string;
        message: string;
      }>;
    }
  | null;

export const LoginAction = async (
  prevState: State | null,
  formData: FormData
): Promise<State> => {
  try {
    // we're gonna put a delay in here to simulate some kind of data processing like persisting data
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const fdIsFeatured = formData.get("isFeatured") === null ? false : true;
    const fdCategory = formData.get("category");
    let fdCategoryNum: number = 0;

    if (typeof fdCategory === "string") {
      const isStringNum = fdCategory.match(/^[0-9]+$/g);
      if (isStringNum) {
        fdCategoryNum = Number(fdCategory);
      }
    }

    const newMenu = {
      menuName: formData.get("menuName"),
      description: formData.get("description"),
      category: fdCategoryNum,
      isFeatured: fdIsFeatured,
    };
    console.log("LoginAction", newMenu, formData);

    // Validate our data
    const { menuName, description, category, isFeatured } =
      NewMenuSchema.parse(newMenu);

    return {
      status: "success",
      message: `New Menu: ${menuName}, ${description}, ${category}, ${isFeatured}!`,
    };
  } catch (e) {
    console.log("SERVER ACTION ERROR!");
    // In case of a ZodError (caused by our validation) we're adding issues to our response
    if (e instanceof ZodError) {
      return {
        status: "error",
        message: "Invalid form data",
        errors: e.issues.map((issue) => ({
          path: issue.path.join("."),
          message: `${issue.message}`,
        })),
      };
    }
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
};
