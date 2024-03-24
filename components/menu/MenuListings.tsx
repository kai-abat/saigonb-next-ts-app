import { AppProps } from "@/utils/Props";
import MenuItem from "./MenuItem";

const MenuListings = ({ categories }: AppProps) => {
  if (!categories || categories.length < 1) return <p>No Menu Avaialble</p>;
  return (
    <div className="flex flex-col gap-3">
      {categories.map((category) => (
        <MenuItem
          key={category.id}
          name={category.altName !== null ? category.altName : "No Category"}
          menus={category.menu}
        />
      ))}
    </div>
  );
};
export default MenuListings;
