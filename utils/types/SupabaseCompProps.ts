export declare interface SupaCategory {
  altName: string | null;
  created_at: string;
  id: number;
  name: string;
  Menu: SupaMenu[];
}

export declare interface SupaMenu {
  categoryId: number | null;
  created_at: string;
  description: string | null;
  id: number;
  isFeatured: boolean;
  name: string;
  Category: {
    altName: string | null;
    created_at: string;
    id: number;
    name: string;
  } | null;
  MenuCoverPhoto: {
    created_at: string;
    id: number;
    imageUrl: string;
    menuId: number;
  }[];
  MenuPrice: {
    created_at: string;
    id: number;
    menuId: number;
    price: number | null;
    size: string;
    type: string;
  }[];
}
