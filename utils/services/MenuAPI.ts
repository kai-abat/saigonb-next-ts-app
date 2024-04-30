'use server';

import { SupaCategory, SupaMenu } from '../types/SupabaseCompProps';
import { Category, CategoryWithMenu, Menu } from '../types/Props';
import { createSupabaseServerClient } from '../supabase/server';

export const extractCategoriesFromDB = async (
  supaCategories: SupaCategory[]
) => {
  const category: CategoryWithMenu[] = await Promise.all(
    supaCategories.map(async category => await extractCategoryFromDB(category))
  );
  return category;
};

export const extractCategoryFromDB = async (supaCategory: SupaCategory) => {
  return {
    id: supaCategory.id,
    name: supaCategory.name,
    altName: supaCategory.altName,
    menu: await extractMenuFromDB(supaCategory.Menu)
  };
};

export const extractMenuFromDB = async (supaMenu: SupaMenu[]) => {
  const menu: Menu[] = await Promise.all(
    supaMenu.map(async (item, index) => {
      return {
        id: item.id,
        name: item.name,
        description: item.description,
        isFeatured: item.isFeatured,
        category: item.Category
          ? {
              id: item.Category.id,
              name: item.Category.name,
              altName: item.Category.altName
            }
          : null,
        price: item.MenuPrice.map(price => {
          return {
            id: price.id,
            type: price.type,
            size: price.size,
            price: price.price
          };
        }),
        coverPhotos: item.MenuCoverPhoto.map(coverPhoto => {
          return {
            id: coverPhoto.id,
            image: coverPhoto.imageUrl,
            orderNumber: coverPhoto.orderNumber
          };
        })
      };
    })
  );

  return menu;
};

export const fetchAllMenu = async (): Promise<Menu[] | undefined> => {
  const supabase = createSupabaseServerClient();

  const { data: menuTbl, error } = await supabase
    .from('Menu')
    .select('*, Category(*), MenuCoverPhoto(*), MenuPrice(*)');

  if (!menuTbl) return;

  // Temporary add timeout to show loading indicator
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  return extractMenuFromDB(menuTbl);
};

export const fetchAllCategories = async (): Promise<
  CategoryWithMenu[] | undefined
> => {
  const supabase = createSupabaseServerClient();

  const { data: categories, error } = await supabase
    .from('Category')
    .select('*, Menu(*, Category(*),MenuCoverPhoto(*), MenuPrice(*))')
    .order('name');

  if (!categories) return;

  // if (error) {
  //   console.log("fetchAllCategories", error);
  //   throw new Error(error.message);
  // }

  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return extractCategoriesFromDB(categories);
};

export const fetchCategoriesOnly = async (): Promise<
  Category[] | undefined
> => {
  const supabase = createSupabaseServerClient();

  const { data: categories, error } = await supabase
    .from('Category')
    .select('id, name, altName');

  if (!categories) return;

  // if (error) {
  //   console.log("fetchCategoriesOnly", error);
  //   throw new Error(error.message);
  // }

  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return categories;
};

export const fetchCategoryByName = async (
  name: string
): Promise<CategoryWithMenu | undefined> => {
  const supabase = createSupabaseServerClient();

  const { data: category, error } = await supabase
    .from('Category')
    .select('*, Menu(*, Category(*),MenuCoverPhoto(*), MenuPrice(*))')
    .eq('name', name)
    .single();
  if (!category) return;

  // if (error) {
  //   console.log("fetchCategoryByName", error);
  //   throw new Error(error.message);
  // }

  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return extractCategoryFromDB(category);
};

export const fetchFeaturedMenu = async () => {
  const supabase = createSupabaseServerClient();

  const { data: menuTbl } = await supabase
    .from('Menu')
    .select('*, Category(*), MenuCoverPhoto(*), MenuPrice(*)')
    .eq('isFeatured', true)
    .order('created_at', { ascending: false });
  if (!menuTbl) return;
  return await extractMenuFromDB(menuTbl);
};

export async function fetchMenuById(id: number) {
  const supabase = createSupabaseServerClient();

  const { data: menuTbl } = await supabase
    .from('Menu')
    .select('*, Category(*), MenuCoverPhoto(*), MenuPrice(*)')
    .eq('id', id)
    .single();

  if (!menuTbl) return;

  // Temporary add timeout to show loading indicator
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  return (await extractMenuFromDB([menuTbl])).at(0);
}

export async function fetchMenuByName(name: string) {
  const supabase = createSupabaseServerClient();

  const { data: menuTbl } = await supabase
    .from('Menu')
    .select('*, Category(*), MenuCoverPhoto(*), MenuPrice(*)')
    .eq('name', name)
    .single();

  if (!menuTbl) return;

  // Temporary add timeout to show loading indicator
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  return (await extractMenuFromDB([menuTbl])).at(0);
}
