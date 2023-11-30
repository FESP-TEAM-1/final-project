import axios from "axios";
import { RelatedVideoList, RelatedVideoItem } from "types/relatedVideo";
import { YoutubeItem } from "types/popularVideo";

export default class FakeYoutubeClient {
  async getVideoAPI(videoId: string, channelId: string) {
    const { data } = await axios.get("/videos/popular.json");
    const filterData = data.items.filter(
      (item: YoutubeItem) => item.id === videoId
    );

    if (filterData.length) {
      return filterData[0];
    } else {
      const { data } = await axios.get<RelatedVideoList>(
        `/videos/searchByChannels/search-by-channel-id-${channelId}.json`
      );
      const filterData = data.items.filter(
        (item: RelatedVideoItem) => item.id.videoId === videoId
      );
      return filterData[0];
    }
  }

  async getVideoListAPI(_pageParam: string) {
    return await axios.get("/videos/popular.json");
  }

  async getRelatedVideoListAPI(channelId: string, _pageParam: string) {
    const res = await axios<RelatedVideoList>(
      `/videos/searchByChannels/search-by-channel-id-${channelId}.json`
    );

    const data = res.data.items.map((item) => ({
      ...item,
      snippet: {
        ...item.snippet,
        resourceId: {
          videoId: item.id.videoId,
        },
      },
    }));
    return { ...res.data, items: data };
  }

  async getSearchVideoListAPI(title: string, _pageParam: string) {
    const titleToLowerCase = title.toLowerCase();
    const { data } = await axios.get("/videos/popular.json");

    let filteredItems = data.items.filter((i: YoutubeItem) =>
      i.snippet.title.toLowerCase().includes(titleToLowerCase)
    );
    filteredItems = filteredItems.map((item: YoutubeItem) => ({
      ...item,
      id: { videoId: item.id },
    }));

    return { items: [...filteredItems] };
  }
}
