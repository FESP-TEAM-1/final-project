import { COMMENT_TABLE, supabase } from "supabase/videoComment";

export const getCommentAPI = async (videoId: string) => {
  // try {
  const { data } = await supabase
    .from(COMMENT_TABLE)
    .select()
    .eq("video_id", videoId)
    .order("created_at", { ascending: false });

  // if (error) {
  //   throw error;
  // }

  return data;
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  //   // 적절한 오류 처리
  //   return Promise.reject();
  // }
};
