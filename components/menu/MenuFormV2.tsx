'use client';
import { useForm, FieldPath, FormProvider } from 'react-hook-form';
import { newMenuAction, State } from '@/utils/actions/menuActions';
import { useFormState } from 'react-dom';
import Title from '../ui/Title';
import { useEffect, useState } from 'react';
import { NewMenuProps } from '@/utils/types/ClientProps';
import { useRouter } from 'next/navigation';
import NewMenuFormContentV2 from './NewMenuFormContentV2';
import { zodResolver } from '@hookform/resolvers/zod';
import { NewMenuFormDataSchema } from '@/utils/zod/NewMenuSchema';
import { Menu } from '@/utils/types/Props';
import { extractServerErrorMessage } from '@/utils/Helper';

export interface FormValues {
  menuName: string;
  description: string;
  category: string;
  isFeatured: boolean;
  imageUpload: {
    imageId: number;
    imageUrl: string;
    orderNumber: number;
  }[];
  priceList: {
    priceId: number;
    type: string;
    size: string;
    price: number;
  }[];
}

const MenuFormV2 = ({ categories = [], menu }: NewMenuProps) => {
  const [clientSideValidation, setClientSideValidation] = useState(true);
  const isEditSession = !menu;

  console.log('MenuFormV2 Props', isEditSession, menu);

  // get 1st category
  const category1st = categories[0]?.id.toString();
  // react hook form
  const methods = useForm<FormValues>({
    mode: 'all',
    defaultValues: getDefaultValues(menu),
    resolver: clientSideValidation
      ? zodResolver(NewMenuFormDataSchema)
      : undefined
  });

  const {
    formState: { isValid, errors },
    setError
  } = methods;

  // const imageUploadFieldArray = useFieldArray({
  //   control,
  //   name: 'imageUpload'
  // });

  // const priceListFieldArray = useFieldArray({
  //   control,
  //   name: 'priceList'
  // });

  // useFormState
  const menuId = menu?.id;
  const menuAction = newMenuAction.bind(null, menuId);
  const [state, formAction] = useFormState<State, FormData>(menuAction, null);
  const router = useRouter();

  // Show the return value/state of server action newMenuAction
  useEffect(() => {
    if (!state) {
      return;
    }
    // In case our form action returns `error` we can now `setError`s
    if (state.status === 'error') {
      console.log('ERRORS!:', state.errors);
      state.errors?.forEach(error => {
        let path = error.path;
        if (path.match('@')) {
          const paths = path.split('@');
          path = paths[1];
        }
        setError(path as FieldPath<FormValues>, {
          message: extractServerErrorMessage(error.message)
        });
      });
    }

    if (state.status === 'success') {
      alert(JSON.stringify(state));
      // Todo: uncomment this after development
      // router.push('/menu/all');
    }
  }, [state, setError, router]);

  function getDefaultValues(menu: NewMenuProps['menu']): FormValues {
    if (menu) {
      return {
        menuName: menu.name,
        description: !menu.description ? '' : menu.description,
        category: menu.category?.id.toString() ?? category1st,
        isFeatured: menu.isFeatured,
        imageUpload: menu.coverPhotos.map(coverPhoto => ({
          imageId: coverPhoto.id,
          imageUrl: coverPhoto.image,
          orderNumber: coverPhoto.orderNumber
        })),
        priceList: menu.price.map(item => ({
          priceId: item.id,
          type: item.type,
          size: item.size,
          price: item.price ?? 0
        }))
      };
    }
    return {
      menuName: '',
      description: '',
      category: category1st,
      isFeatured: true,
      imageUpload: [{ imageId: 0, imageUrl: '', orderNumber: 1 }],
      priceList: [{ priceId: 0, type: 'Hot', size: '12oz', price: 100 }]
    };
  }

  return (
    <FormProvider {...methods}>
      <header>
        <Title capitalize>New Menu</Title>
      </header>
      <main className=''>
        <form className='flex flex-col gap-3' action={formAction}>
          <NewMenuFormContentV2 categories={categories} />
        </form>
      </main>
    </FormProvider>
  );
};
export default MenuFormV2;
