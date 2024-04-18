import { fetchFeaturedMenu } from '@/utils/services/MenuAPI';
import { getUserData, isAuthenticated } from '@/utils/services/UserAPI';
import MenuCard from '../menu/MenuCard';
import { Divider } from '@nextui-org/react';
import Title from './Title';

const FeaturedMenu = async () => {
  const isAuth = await isAuthenticated();
  const menus = await fetchFeaturedMenu();

  if (!menus) return <span>No Featured Menu</span>;
  return (
    <div className='flex flex-col gap-4 rounded-xl bg-primary/60 p-4'>
      <Title capitalize>Featured Menu</Title>
      <Divider />
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
        {menus.map((menu, index) => (
          <MenuCard key={index} menuItem={menu} isAuthenticated={isAuth} />
        ))}
      </div>
    </div>
  );
};
export default FeaturedMenu;
