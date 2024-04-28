export declare interface SupaCategory {
  altName: string | null;
  created_at: string;
  id: number;
  name: string;
  Menu: SupaMenu[];
}

export declare interface SupaCoverPhotoFile {
  created_at?: string;
  id?: number;
  imageFile: FileBody;
  imageUrl: string;
  menuId?: number | null;
  orderNumber: number;
}

export declare interface SupaMenuNoRef {
  id?: number;
  created_at?: string;
  name: string;
  description: string | null;
  isFeatured: boolean;
  categoryId: number | null;
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
    orderNumber: number | null;
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

export type FileBody =
  | ArrayBuffer
  | ArrayBufferView
  | Blob
  | Buffer
  | File
  | FormData
  | NodeJS.ReadableStream
  | ReadableStream<Uint8Array>
  | URLSearchParams
  | string;
