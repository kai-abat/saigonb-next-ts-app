import AddMenuForm from "@/components/menu/AddMenuForm";
import { fetchCategoriesOnly } from "@/utils/services/MenuAPI";

const AddMenuPage = async () => {
  const categories = await fetchCategoriesOnly();
  return <AddMenuForm categories={categories} />;
};
export default AddMenuPage;
