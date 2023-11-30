import FakeYoutubeClient from "api/fakeYoutubeClient";
import YoutubeClient from "api/youtubeClient";
import { AxiosResponse } from "axios";
import { COMMENT_TABLE, supabase } from "api/supabase/videoComment";

export default class Youtube {
  apiClient: FakeYoutubeClient | YoutubeClient;
  constructor(apiClient: FakeYoutubeClient | YoutubeClient) {
    this.apiClient = apiClient;
  }

  // 영상 한 개 조회
  async getVideo(videoId: string, channelId: string) {
    return this.apiClient.getVideoAPI(videoId, channelId);
  }

  // 인기 영상 리스트 조회
  async getVideoList(pageParam: string) {
    return this.apiClient
      .getVideoListAPI(pageParam)
      .then((res: AxiosResponse) => res.data);
  }

  // 채널 영상 리스트 조회
  async getChannelData(channelId: string, pageParam: string) {
    return this.apiClient.getChannelDataAPI(channelId, pageParam);
  }

  // 검색 영상 리스트 조회
  async getSearchVideoList(title: string, pageParam: string) {
    return this.apiClient.getSearchVideoListAPI(title, pageParam);
  }

  // 댓글 조회
  async getComment(videoId: string, pageParam: number) {
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
  }

  // 댓글 추가
  async insertComment(insertData: { videoId: string; commentInput: string }) {
    const { commentInput, videoId } = insertData;

    const { data } = await supabase
      .from(COMMENT_TABLE)
      .insert({ text: commentInput, video_id: videoId })
      .select();

    return data;
  }

  // 댓글 삭제
  async deleteComment(id: number) {
    const { data } = await supabase
      .from(COMMENT_TABLE)
      .delete()
      .eq("id", id)
      .select();

    return data;
  }
}
