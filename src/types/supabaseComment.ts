export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      video_comment: {
        Row: {
          anonymous_user_id: string;
          created_at: string;
          id: number;
          text: string | null;
          video_id: string;
        };
        Insert: {
          anonymous_user_id?: string;
          created_at?: string;
          id?: number;
          text?: string | null;
          video_id?: string;
        };
        Update: {
          anonymous_user_id?: string;
          created_at?: string;
          id?: number;
          text?: string | null;
          video_id?: string;
        };
        Relationships: [];
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
}
