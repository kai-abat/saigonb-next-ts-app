"use client";

import { UseFormRegister } from "react-hook-form";
import { Category } from "./Props";

export declare interface NewMenuProps {
  categories?: Category[];
  category?: Category;
  register?: UseFormRegister<any>;
}

export declare interface NewMenuValuesProps {}
