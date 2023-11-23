import { Dispatch, SetStateAction } from "react";
import { COMMENT_TABLE, supabase } from "supabase/videoComment";
import { AllCommentType } from "types/commentItem";

export const deleteCommentAPI = async (
  id: number,
  comments: AllCommentType[],
  setComments: Dispatch<SetStateAction<AllCommentType[]>>
) => {
  await supabase.from(COMMENT_TABLE).delete().eq("id", id).select();
  setComments(comments.filter((comment) => comment.id !== id));
};
