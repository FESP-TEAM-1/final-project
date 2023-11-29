import axios, { AxiosInstance } from "axios";

export default class YoutubeClient {
  httpClient: AxiosInstance;
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3/",
      params: { key: process.env.REACT_APP_YOUTUBE_PROJECT_API_KEY },
    });
  }

  async getVideoAPI(videoId: string, _channelId: string) {
    const params = {
      part: "snippet,contentDetails,statistics",
      id: videoId,
    };
    const { data } = await this.httpClient.get(`videos`, { params });
    return data.items[0];
  }

  async getVideoListAPI(pageParam: string) {
    const params = {
      part: `snippet,contentDetails,statistics`,
      chart: "mostPopular",
      regionCode: "kr",
      maxResults: 50,
      pageToken: pageParam,
    };
    return await this.httpClient.get("videos", { params });
  }

  async getChannelDataAPI(channelId: string, pageParam: string) {
    const paramsChannels = {
      part: "contentDetails",
      id: channelId,
    };
    const res = await this.httpClient.get(`channels`, {
      params: paramsChannels,
    });

    const playlistId =
      res.data.items[0].contentDetails.relatedPlaylists.uploads;
    const paramsPlaylistItems = {
      part: "snippet",
      playlistId: playlistId,
      maxResults: 10,
      pageToken: pageParam,
    };
    return await this.httpClient.get(`playlistItems`, {
      params: paramsPlaylistItems,
    });
  }

  async getSearchVideoListAPI(title: string, pageParam: string) {
    const { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${title}&key=${process.env.REACT_APP_YOUTUBE_PROJECT_API_KEY}&pageToken=${pageParam}&type=video`
    );
    return data;
  }
}
