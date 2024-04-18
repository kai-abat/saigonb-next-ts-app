'use client';
import { MenuCategoriesDefault } from '@/utils/types/Props';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

const FilterMenu = ({
  defaultCategories,
  currentCategory
}: MenuCategoriesDefault) => {
  currentCategory = currentCategory.toLowerCase().trim();
  const router = useRouter();

  function handleFilter(category: string): void {
    if (category.toLocaleLowerCase() === 'all') {
      router.push(`/menu`);
    } else {
      router.push(`/menu/${category}`);
    }
  }

  return (
    <div
      id='filter-menu'
      className='flex w-full flex-wrap items-center justify-center gap-2 rounded-lg bg-primary/60 px-3 py-2'
    >
      {defaultCategories.map((category, index) => (
        <Button
          key={index}
          onClick={() => handleFilter(category)}
          color={
            currentCategory === category.toLowerCase() ? 'secondary' : 'default'
          }
          className={`capitalize  ${
            currentCategory === category.toLowerCase()
              ? 'bg-secondary'
              : 'bg-secondary-100 hover:bg-secondary-200'
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
export default FilterMenu;
