"use server";

export const LoginAction = async (prevState: any, formData: FormData) => {
  const newMenu = {
    menuName: formData.get("menuName"),
    description: formData.get("description"),
    category: formData.get("category"),
    isFeatured: formData.get("isFeatured"),
  };
  console.log("LoginAction", newMenu, formData);
  return null;
};
