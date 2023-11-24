import { COMMENT_TABLE, supabase } from "supabase/videoComment";

export const insertCommentAPI = async (
  videoId: string,
  commentInput: string
) => {
  try {
    const { data, error } = await supabase
      .from(COMMENT_TABLE)
      .insert({ text: commentInput, video_id: videoId })
      .select();

    if (error) {
      throw error;
    }

    return data[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    // 적절한 오류 처리
    return Promise.reject();
  }
};
