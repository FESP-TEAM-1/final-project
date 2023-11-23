import { Dispatch, SetStateAction } from "react";
import { COMMENT_TABLE, supabase } from "supabase/videoComment";
import { AllCommentType } from "types/commentItem";

export const insertCommentAPI = async (
  videoId: string,
  commentInput: string,
  comments: AllCommentType[],
  setComments: Dispatch<SetStateAction<AllCommentType[]>>
) => {
  try {
    const { data, error } = await supabase
      .from(COMMENT_TABLE)
      .insert({ text: commentInput, video_id: videoId })
      .select();

    if (error) {
      throw error;
    }

    setComments([data[0], ...comments])!;
  } catch (error) {
    console.error("Error fetching data:", error);
    // 적절한 오류 처리
  }
};
