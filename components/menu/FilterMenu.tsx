"use client";
import { MenuCategoriesDefault } from "@/utils/types/Props";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

const FilterMenu = ({
  defaultCategories,
  currentCategory,
}: MenuCategoriesDefault) => {
  currentCategory = currentCategory.toLowerCase().trim();
  const router = useRouter();

  function handleFilter(category: string): void {
    if (category.toLocaleLowerCase() === "all") {
      router.push(`/menu`);
    } else {
      router.push(`/menu/${category}`);
    }
  }

  return (
    <div
      id="filter-menu"
      className="flex justify-center items-center py-2 gap-2 bg-content4 rounded-lg flex-wrap px-3"
    >
      {defaultCategories.map((category, index) => (
        <Button
          key={index}
          onClick={() => handleFilter(category)}
          color={
            currentCategory === category.toLowerCase() ? "primary" : "default"
          }
          className={`capitalize ${
            currentCategory === category.toLowerCase()
              ? "bg-primary"
              : "bg-primary-100"
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
export default FilterMenu;
