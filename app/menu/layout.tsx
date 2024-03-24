import FilterMenu from "@/components/menu/FilterMenu";
import { fetchAllCategories } from "@/utils/services/SaigonMenuAPI";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saigon Brewers Menu",
  description: "All available menu of Saigon Brewers Cafe.",
};

export default async function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categoriesTbl = await fetchAllCategories();
  return (
    <section id="menu-container" className="flex flex-col gap-4">
      {children}
    </section>
  );
}
