import { COMMENT_TABLE, supabase } from "supabase/videoComment";

interface paramsType {
  videoId: string;
  commentInput: string;
}

export const insertCommentAPI = async (insertData: paramsType) => {
  const { commentInput, videoId } = insertData;

  const { data } = await supabase
    .from(COMMENT_TABLE)
    .insert({ text: commentInput, video_id: videoId })
    .select();

  return data;
};
