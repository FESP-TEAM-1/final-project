import { createClient } from "@supabase/supabase-js";
import { Database } from "types/supabaseComment";

const project_id = process.env.REACT_APP_SUPABASE_PROJECT_ID as string;
const project_api_key = process.env
  .REACT_APP_SUPABASE_PROJECT_API_KEY as string;

export const supabase = createClient<Database>(
  `https://${project_id}.supabase.co`,
  project_api_key
);

export const COMMENT_TABLE = "video_comment";
