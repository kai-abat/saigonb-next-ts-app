import FilterMenu from '@/components/menu/FilterMenu';
import BreadCrumbs from '@/components/ui/BreadCrumbs';
import Container from '@/components/ui/Container';
import { fetchAllCategories } from '@/utils/services/MenuAPI';
import { Divider } from '@nextui-org/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Saigon Brewers Menu',
  description: 'All available menu of Saigon Brewers Cafe.'
};

export default async function MenuLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const categoriesTbl = await fetchAllCategories();
  return (
    <Container>
      <BreadCrumbs />
      <Divider className='my-2' />
      {children}
    </Container>
  );
}
