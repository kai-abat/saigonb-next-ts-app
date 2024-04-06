"use server";

import { NewMenuSchema, imageURLSchema } from "../zod/NewMenuSchema";
import { ZodError, z } from "zod";

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

export const newMenuAction = async (
  prevState: State | null,
  formData: FormData
): Promise<State> => {
  try {
    // we're gonna put a delay in here to simulate some kind of data processing like persisting data
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("newMenuAction formData:", formData);

    // Process Given Input/Select/Checked Components
    const fdIsFeatured = formData.get("isFeatured") === null ? false : true;
    const fdCategory = formData.get("category");
    let fdCategoryNum: FormDataEntryValue =
      fdCategory === null ? "" : fdCategory;

    //
    let newMenu = {
      menuName: formData.get("menuName"),
      description: formData.get("description"),
      category: fdCategoryNum,
      isFeatured: fdIsFeatured,
    };

    let newMenuTemp = {};
    newMenuTemp = { ...newMenu };

    // Process Dynamic Components
    // Cover Photo
    const imageNumber: number = Number(formData.get("image-number-of-upload"));
    let imageUploadObj = {};
    let NewMenuSchemaExtended = z.object({});
    NewMenuSchemaExtended = NewMenuSchemaExtended.merge(NewMenuSchema);
    for (let index = 0; index < imageNumber; index++) {
      const currentNumber = index + 1;

      // image-id-${currentNumber}
      // image-url-${currentNumber}
      // image-order-${currentNumber}
      const imageDataID_Key = `image-id-${currentNumber}`;
      const imageDataURL_Key = `image-url-${currentNumber}`;
      const imageDataFile_Key = `image-file-${currentNumber}`;
      const imageDataOrder_Key = `image-order-${currentNumber}`;

      const imageDataID_Value = Number(formData.get(imageDataID_Key));
      const imageDataURL_Value = formData.get(imageDataURL_Key);
      const imageDataFile_Value = formData.get(imageDataFile_Key);
      const imageDataOrder_Value = Number(formData.get(imageDataOrder_Key));

      const imageDataSchema = z.object({
        [imageDataID_Key]: z.number(),
        [imageDataURL_Key]: imageURLSchema,
        [imageDataOrder_Key]: z.number(),
      });

      NewMenuSchemaExtended = NewMenuSchemaExtended.merge(imageDataSchema);

      const newMenuAddonImageData = {
        [imageDataID_Key]: imageDataID_Value,
        [imageDataURL_Key]: imageDataURL_Value,
        [imageDataOrder_Key]: imageDataOrder_Value,
      };
      newMenuTemp = {
        ...newMenuTemp,
        ...newMenuAddonImageData,
      };
    }

    console.log("image upload card:", NewMenuSchemaExtended.keyof());
    // Price List

    console.log("newMenuAction: newMenuTemp", newMenuTemp);

    // Validate our data
    const result = NewMenuSchemaExtended.parse(newMenuTemp);

    return {
      status: "success",
      message: `New Menu: ${result}!`,
    };
  } catch (e) {
    console.log("SERVER ACTION ERROR!");
    // In case of a ZodError (caused by our validation) we're adding issues to our response
    if (e instanceof ZodError) {
      e.issues.map((issue) =>
        console.log("ZodError", issue.path.join("."), issue.message)
      );
      return {
        status: "error",
        message: "Invalid form data",
        errors: e.issues.map((issue) => ({
          path: issue.path.join("."),
          message: `SERVER: ${issue.message}`,
        })),
      };
    }
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
};
