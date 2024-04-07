import { ComponentProps } from "@/utils/types/Props";
import MenuCard from "./MenuCard";
import { Divider } from "@nextui-org/react";
import Title from "../Title";

// name: category name
const MenuItem = ({ name, menus }: ComponentProps) => {
  if (!menus) return;
  return (
    <div className="flex flex-col gap-4 bg-content4  rounded-xl p-3">
      <Title capitalize>{name}</Title>
      <Divider />
      {menus.length < 1 && <span>No menu available</span>}
      <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
        {menus.map((menu, index) => (
          <MenuCard key={index} menuItem={menu} />
        ))}
      </div>
    </div>
  );
};
export default MenuItem;
