import NewMenuForm from "@/components/menu/NewMenuForm";
import { fetchCategoriesOnly } from "@/utils/services/MenuAPI";

const NewMenuPage = async () => {
  const categories = await fetchCategoriesOnly();
  return <NewMenuForm categories={categories} />;
  // return <NewMenuForm categories={[]} />;
};
export default NewMenuPage;
