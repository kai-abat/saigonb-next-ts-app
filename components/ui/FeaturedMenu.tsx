import { fetchFeaturedMenu } from "@/utils/services/MenuAPI";
import { getUserData, isAuthenticated } from "@/utils/services/UserAPI";
import MenuCard from "../menu/MenuCard";
import { Divider } from "@nextui-org/react";

const FeaturedMenu = async () => {
  const isAuth = await isAuthenticated();
  const menus = await fetchFeaturedMenu();

  if (!menus) return <span>No Featured Menu</span>;
  return (
    <div className="flex flex-col gap-4 p-4 bg-primary/60 rounded-xl">
      <h1 className="text-5xl text-secondary font-semibold">Featured Menu</h1>
      <Divider />
      <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
        {menus.map((menu, index) => (
          <MenuCard key={index} menuItem={menu} isAuthenticated={isAuth} />
        ))}
      </div>
    </div>
  );
};
export default FeaturedMenu;
