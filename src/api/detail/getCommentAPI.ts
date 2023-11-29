import { COMMENT_TABLE, supabase } from "supabase/videoComment";

export const getCommentAPI = async (videoId: string, pageParam: number) => {
  const limit = 10;
  const start = pageParam * limit;
  const end = (pageParam + 1) * limit - 1;

  const response = await supabase
    .from(COMMENT_TABLE)
    .select("*", { count: "exact" })
    .eq("video_id", videoId)
    .order("created_at", { ascending: false })
    .range(start, end);

  const data = response.data || [];
  const totalCount = response.count;
  const nextPageToken = data.length === limit ? pageParam + 1 : undefined;

  const newDic = {
    items: data,
    nextPageToken,
    pageInfo: {
      totalResults: totalCount,
      resultsPerPage: data.length,
    },
  };

  return newDic;
};
