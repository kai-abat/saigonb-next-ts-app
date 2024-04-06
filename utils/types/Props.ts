export declare interface CarouselData {
  image: string;
  title: string;
}

export declare interface Category {
  id: number;
  name: string;
  altName: string | null;
}

export declare interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  email: string;
}

export declare interface CategoryWithMenu {
  id: number;
  name: string;
  altName: string | null;
  menu: Menu[];
}

export declare interface Menu {
  id: number;
  name: string;
  description: string | null;
  category: Category | null;
  price: Price[];
  coverPhotos: MenuCoverPhoto[];
  isFeatured: boolean;
}

export declare interface MenuCoverPhoto {
  id: number;
  image: string;
}

export declare interface Price {
  id: number;
  type: string;
  size: string;
  price: number | null;
}

export declare interface Media {
  data: {
    title: string;
    image: string;
  }[];
}

export declare interface MenuCategoriesDefault {
  defaultCategories: string[];
  currentCategory: string;
}

export declare interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export declare interface AppProps {
  children?: React.ReactNode; // best, accepts everything React can render
  style?: React.CSSProperties; // to pass through style props
  onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event.target
  menus?: Menu[];
  menuItem?: Menu;
  prices?: Price[];
  price?: Price;
  type?: string;
  sub?: string;
  name?: string;
  label?: string;
  title?: string;
  description?: string;
  category?: CategoryWithMenu;
  categories?: CategoryWithMenu[];
  showBrand?: boolean;
  align?: "left" | "right" | "center";
  className?: string;
  images?: MenuCoverPhoto[];
  capitalize?: boolean;
  id?: string;
}

export declare interface ImageStore {
  id: number;
  imageUrl: string;
  isActive: boolean;
}
