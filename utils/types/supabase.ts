export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      Blog: {
        Row: {
          created_at: string;
          id: number;
          post: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          post: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          post?: string;
        };
        Relationships: [];
      };
      BlogBucket: {
        Row: {
          attachment: string;
          blogId: number | null;
          created_at: string;
          id: number;
          mediaType: string;
          order: number;
        };
        Insert: {
          attachment: string;
          blogId?: number | null;
          created_at?: string;
          id?: number;
          mediaType: string;
          order: number;
        };
        Update: {
          attachment?: string;
          blogId?: number | null;
          created_at?: string;
          id?: number;
          mediaType?: string;
          order?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'BlogBucket_blogId_fkey';
            columns: ['blogId'];
            isOneToOne: false;
            referencedRelation: 'Blog';
            referencedColumns: ['id'];
          }
        ];
      };
      Category: {
        Row: {
          altName: string | null;
          created_at: string;
          id: number;
          name: string;
        };
        Insert: {
          altName?: string | null;
          created_at?: string;
          id?: number;
          name: string;
        };
        Update: {
          altName?: string | null;
          created_at?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      Hero: {
        Row: {
          created_at: string;
          id: string;
          imageUrl: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          imageUrl?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          imageUrl?: string | null;
        };
        Relationships: [];
      };
      Menu: {
        Row: {
          categoryId: number | null;
          created_at: string;
          description: string | null;
          id: number;
          isFeatured: boolean;
          name: string;
        };
        Insert: {
          categoryId?: number | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          isFeatured?: boolean;
          name: string;
        };
        Update: {
          categoryId?: number | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          isFeatured?: boolean;
          name?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'public_Menu_categoryId_fkey';
            columns: ['categoryId'];
            isOneToOne: false;
            referencedRelation: 'Category';
            referencedColumns: ['id'];
          }
        ];
      };
      MenuCoverPhoto: {
        Row: {
          created_at: string;
          id: number;
          imageUrl: string;
          menuId: number | null;
          orderNumber: number;
        };
        Insert: {
          created_at?: string;
          id?: number;
          imageUrl: string;
          menuId?: number | null;
          orderNumber: number;
        };
        Update: {
          created_at?: string;
          id?: number;
          imageUrl?: string;
          menuId?: number | null;
          orderNumber?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'public_MenuCoverPhoto_menuId_fkey';
            columns: ['menuId'];
            isOneToOne: false;
            referencedRelation: 'Menu';
            referencedColumns: ['id'];
          }
        ];
      };
      MenuPrice: {
        Row: {
          created_at: string;
          id: number;
          menuId: number | null;
          price: number;
          size: string;
          type: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          menuId?: number | null;
          price: number;
          size: string;
          type: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          menuId?: number | null;
          price?: number;
          size?: string;
          type?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'public_MenuPrice_menuId_fkey';
            columns: ['menuId'];
            isOneToOne: false;
            referencedRelation: 'Menu';
            referencedColumns: ['id'];
          }
        ];
      };
      UserProfile: {
        Row: {
          firstName: string | null;
          id: string;
          lastName: string | null;
          position: string | null;
        };
        Insert: {
          firstName?: string | null;
          id: string;
          lastName?: string | null;
          position?: string | null;
        };
        Update: {
          firstName?: string | null;
          id?: string;
          lastName?: string | null;
          position?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'userprofile_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;
