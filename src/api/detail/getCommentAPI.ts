import { COMMENT_TABLE, supabase } from "supabase/videoComment";

export const getCommentAPI = async (videoId: string) => {
  const { data } = await supabase
    .from(COMMENT_TABLE)
    .select()
    .eq("video_id", videoId)
    .order("created_at", { ascending: false });

  return data;
};
