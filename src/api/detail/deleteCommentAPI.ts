import { COMMENT_TABLE, supabase } from "supabase/videoComment";

export const deleteCommentAPI = async (id: number) => {
  const { data } = await supabase
    .from(COMMENT_TABLE)
    .delete()
    .eq("id", id)
    .select();

  return data;
};
