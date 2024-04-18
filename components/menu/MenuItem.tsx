import { ComponentProps } from '@/utils/types/Props';
import MenuCard from './MenuCard';
import { Divider } from '@nextui-org/react';
import Title from '../ui/Title';
import { getUserData } from '@/utils/services/UserAPI';

// name: category name
const MenuItem = async ({ name, menus }: ComponentProps) => {
  if (!menus) return;

  const userData = await getUserData();
  let isAuthenticated = !userData ? false : true;

  return (
    <div className='flex flex-col gap-4 rounded-xl bg-primary/60 p-3'>
      <Title capitalize>{name}</Title>
      <Divider />
      {menus.length < 1 && <span>No menu available</span>}
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
        {menus.map((menu, index) => (
          <MenuCard
            key={index}
            menuItem={menu}
            isAuthenticated={isAuthenticated}
          />
        ))}
      </div>
    </div>
  );
};
export default MenuItem;
