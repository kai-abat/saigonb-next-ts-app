'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { ZodError, z } from 'zod';
import { createSupabaseServerClient } from '../supabase/server';
import { FileBody, SupaCoverPhotoFile } from '../types/SupabaseCompProps';
import { Database } from '../types/supabase';
import {
  NewMenuFormDataSchema,
  NewMenuSchema,
  imageURLSchema
} from '../zod/NewMenuSchema';
import { fetchMenuById } from '../services/MenuAPI';
import { getErrorMessage } from '../ErrorHandling';

export type State =
  | {
      status: 'success';
      message: string;
    }
  | {
      status: 'error';
      message: string;
      errors?: Array<{
        path: string;
        message: string;
      }>;
    }
  | null;

export const deleteMenuAction = async (
  prevState: State,
  formData: FormData
): Promise<State> => {
  // we're gonna put a delay in here to simulate some kind of data processing like persisting data
  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log('deleteMenuAction', formData);
  // menu-id
  const menuId = Number(formData.get('menu-id') as string);

  // delete data from database
  const menu = await fetchMenuById(menuId);

  if (menu) {
    const priceList = menu.price;
    const coverPhotos = menu.coverPhotos;

    // console.log("DB Menu", menu);
    // console.log("DB priceList", priceList);
    // console.log("DB coverPhotos", coverPhotos);

    const imageUrls = coverPhotos.map(cover => cover.image);
    const supabase = createSupabaseServerClient();

    // delete cover photos
    await supabase.storage.from('saigon').remove(imageUrls);
    // delete cover photo db
    await Promise.all(
      coverPhotos.map(async cover => {
        const { error } = await supabase
          .from('MenuCoverPhoto')
          .delete()
          .eq('id', cover.id);
      })
    );
    // delete price list db
    await Promise.all(
      priceList.map(async price => {
        const { error } = await supabase
          .from('MenuPrice')
          .delete()
          .eq('id', price.id);
      })
    );
    // delete menu db
    await supabase.from('Menu').delete().eq('id', menu.id);
  }

  revalidatePath('/menu', 'layout');
  redirect('/menu/all');
};

export const newMenuAction = async (
  menuId: number | undefined,
  prevState: State,
  formData: FormData
): Promise<State> => {
  try {
    // we're gonna put a delay in here to simulate some kind of data processing like persisting data
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Menu ID:', menuId);
    console.log('newMenuAction formData:', formData);

    const { menuName, description, category, isFeatured } =
      NewMenuFormDataSchema.parse(formData);

    console.log(
      'newMenuAction data:',
      menuName,
      description,
      category,
      isFeatured
    );

    return {
      status: 'success',
      message: `New Menu is in development mpde...`
    };
  } catch (e) {
    const errorMessage = getErrorMessage(e);
    console.log('SERVER ACTION ERROR!', typeof e, errorMessage);
    // In case of a ZodError (caused by our validation) we're adding issues to our response
    if (e instanceof ZodError) {
      e.issues.map(issue =>
        console.log('ZodError', issue.path.join('.'), issue.message)
      );
      return {
        status: 'error',
        message: 'Invalid form data',
        errors: e.issues.map(issue => ({
          path: issue.path.join('.'),
          message: `SERVER: ${issue.message}`
        }))
      };
    }
    return {
      status: 'error',
      message: 'Something went wrong. Please try again.'
    };
  }
};

export const newMenuAction2 = async (
  menuId: number | undefined,
  prevState: State,
  formData: FormData
): Promise<State> => {
  try {
    // we're gonna put a delay in here to simulate some kind of data processing like persisting data
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('newMenuAction formData:', formData);

    // Process Given Input/Select/Checked Components
    const fdIsFeatured = formData.get('isFeatured') === null ? false : true;
    const fdCategory = formData.get('category') as string;
    let fdCategoryNum: string = fdCategory === null ? '' : fdCategory;

    //
    let newMenu = {
      menuName: formData.get('menuName') as string,
      description: formData.get('description') as string,
      category: fdCategoryNum,
      isFeatured: fdIsFeatured
    };

    // Process Dynamic Components
    // Cover Photo

    const imageNumber: number = Number(formData.get('image-number-of-upload'));
    let coverPhotos: SupaCoverPhotoFile[] = [];
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
      const imageDataURL_Value = formData.get(imageDataURL_Key) as string;
      const imageDataFile_Value = formData.get(imageDataFile_Key) as FileBody;
      const imageDataOrder_Value = Number(formData.get(imageDataOrder_Key));

      // create zod object for validation
      const imageDataSchema = z.object({
        [imageDataID_Key]: z.number(),
        [imageDataURL_Key]: imageURLSchema,
        [imageDataOrder_Key]: z.number()
      });

      // merge zod object to main schema
      NewMenuSchemaExtended = NewMenuSchemaExtended.merge(imageDataSchema);

      const imageDataObj = {
        [imageDataID_Key]: imageDataID_Value,
        [imageDataURL_Key]: imageDataURL_Value,
        [imageDataOrder_Key]: imageDataOrder_Value
      };

      coverPhotos.push({
        imageUrl: imageDataURL_Value,
        imageFile: imageDataFile_Value,
        orderNumber: imageDataOrder_Value
      });

      newMenu = {
        ...newMenu,
        ...imageDataObj
      };
    }

    // Price List
    let newPrices: Database['public']['Tables']['MenuPrice']['Insert'][] = [];
    for (let index = 0; index < imageNumber; index++) {
      const currentNumber = index + 1;
      // price-number
      // price-select-type-2
      // price-select-size-2
      // price-input-2

      const priceType_Key = `price-select-type-${currentNumber}`;
      const priceSize_Key = `price-select-size-${currentNumber}`;
      const priceInput_Key = `price-input-${currentNumber}`;

      const priceType_Value = formData.get(priceType_Key) as string;
      const priceSize_Value = formData.get(priceSize_Key) as string;
      const priceInput_Value = Number(formData.get(priceInput_Key));

      const priceDataObj = {
        [priceType_Key]: priceType_Value,
        [priceSize_Key]: priceSize_Value,
        [priceInput_Key]: priceInput_Value
      };

      newPrices.push({
        type: priceType_Value,
        size: priceSize_Value,
        price: priceInput_Value
      });
    }

    // Validate our data
    const result = NewMenuSchemaExtended.parse(newMenu);

    // Save data to database
    // Menu
    console.log('Menu data before saving to DB', newMenu);
    const menuDB = await insertMenu({
      name: newMenu.menuName,
      description: newMenu.description,
      isFeatured: newMenu.isFeatured,
      categoryId: newMenu.category === '' ? null : Number(newMenu.category)
    });
    console.log('Menu data after saving to DB', menuDB);

    // Cover Photos
    console.log('Cover Photos before saving to DB', coverPhotos);
    const coverPhotosDB = await insertCoverPhotos(
      coverPhotos,
      newMenu.menuName,
      menuDB?.id
    );
    console.log('Cover Photos saved to DB', coverPhotosDB);

    // Price List
    console.log('Price List before saving to DB', newPrices);
    const pricesDB = await insertPriceList(newPrices, menuDB?.id);
    console.log('Price List after saving to DB', pricesDB);

    revalidatePath('/menu', 'layout');

    return {
      status: 'success',
      message: `Menu ${menuDB?.name} successfully saved...`
    };
  } catch (e) {
    const errorMessage = getErrorMessage(e);
    console.log('SERVER ACTION ERROR!', typeof e, errorMessage);
    // In case of a ZodError (caused by our validation) we're adding issues to our response
    if (e instanceof ZodError) {
      e.issues.map(issue =>
        console.log('ZodError', issue.path.join('.'), issue.message)
      );
      return {
        status: 'error',
        message: 'Invalid form data',
        errors: e.issues.map(issue => ({
          path: issue.path.join('.'),
          message: `SERVER: ${issue.message}`
        }))
      };
    }
    return {
      status: 'error',
      message: 'Something went wrong. Please try again.'
    };
  }
};

const insertMenu = async (
  menu: Database['public']['Tables']['Menu']['Insert']
) => {
  const supabase = createSupabaseServerClient();
  let menuQuery = supabase.from('Menu').insert([menu]);
  const { data } = await menuQuery.select().single();

  return data;
};

const insertPriceList = async (
  menuPrices: Database['public']['Tables']['MenuPrice']['Insert'][],
  menuId: number | null | undefined
) => {
  menuPrices = menuPrices.map(price => {
    return { ...price, menuId: menuId };
  });
  const supabase = createSupabaseServerClient();
  let priceQuery = supabase.from('MenuPrice').insert([...menuPrices]);
  const { data } = await priceQuery.select();
  return data;
};

const insertCoverPhotos = async (
  coverPhotos: SupaCoverPhotoFile[],
  menuName: string,
  menuId: number | null | undefined
) => {
  const supabase = createSupabaseServerClient();
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  // upload cover photo to database
  if (!supabaseUrl) return null;

  menuName = menuName.split(' ').join('-');

  const coverPhotosDB = await Promise.all(
    coverPhotos.map(async coverPhoto => {
      // coverPhoto = { ...coverPhoto, menuId: menuId };
      const hasImagePath: boolean =
        coverPhoto.imageUrl !== null &&
        coverPhoto.imageUrl.startsWith(supabaseUrl);

      const imageFilename = `${menuName}_${coverPhoto.orderNumber}`;

      // /storage/v1/object/public/saigon
      const imagePath =
        hasImagePath && coverPhoto.imageUrl !== null
          ? coverPhoto.imageUrl
          : `${supabaseUrl}/storage/v1/object/public/saigon/${imageFilename}`;

      const coverPhotoDB: Database['public']['Tables']['MenuCoverPhoto']['Insert'] =
        {
          imageUrl: imagePath,
          menuId: menuId,
          orderNumber: coverPhoto.orderNumber
        };

      // upload image to supabase
      let error = false;
      if (!hasImagePath) {
        console.log('Uploading image:', imageFilename, imagePath);

        const { error: storageError } = await supabase.storage
          .from('saigon')
          .upload(imageFilename, coverPhoto.imageFile);

        if (storageError) {
          console.log('Storage error', imageFilename);
          error = true;
        }
      } else {
        console.log('Image already uploaded', imagePath);
      }

      if (!error) {
        // store data to supabasse
        let converPhotoQuery = supabase
          .from('MenuCoverPhoto')
          .insert([coverPhotoDB]);
        const { data } = await converPhotoQuery.select().single();
        return data;
      }
    })
  );

  return coverPhotosDB;
};
