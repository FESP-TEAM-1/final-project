import { COMMENT_TABLE, supabase } from "supabase/videoComment";

export const deleteCommentAPI = async (id: number) => {
  try {
    const { data, error } = await supabase
      .from(COMMENT_TABLE)
      .delete()
      .eq("id", id)
      .select();

    if (error) {
      throw error;
    }
    return data[0];
  } catch (err) {
    console.error(err);
    return Promise.reject();
  }
};
