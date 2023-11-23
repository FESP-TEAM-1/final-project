import { Dispatch, SetStateAction } from "react";
import { COMMENT_TABLE, supabase } from "supabase/videoComment";
import { AllCommentType } from "types/commentItem";

export const getCommentAPI = async (
  videoId: string,
  setComments: Dispatch<SetStateAction<AllCommentType[]>>
) => {
  try {
    const { data, error } = await supabase
      .from(COMMENT_TABLE)
      .select()
      .eq("video_id", videoId)
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    if (data) {
      setComments(data as AllCommentType[]);
    } else {
      setComments([]);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    // 적절한 오류 처리
  }
};
