import axios from "axios";
import { ChannelData, ChannelItem } from "types/detailItem";
import { YoutubeItem } from "types/mainItem";

export default class FakeYoutubeClient {
  async getVideoAPI(videoId: string, channelId: string) {
    const { data } = await axios.get("/videos/popular.json");
    const filterData = data.items.filter(
      (item: YoutubeItem) => item.id === videoId
    );

    if (filterData.length) {
      return filterData[0];
    } else {
      const { data } = await axios.get<ChannelData>(
        `/videos/searchByChannels/search-by-channel-id-${channelId}.json`
      );
      const filterData = data.items.filter(
        (item: ChannelItem) => item.id.videoId === videoId
      );
      return filterData[0];
    }
  }

  async getVideoListAPI(_pageParam: string) {
    return await axios.get("/videos/popular.json");
  }

  async getChannelDataAPI(channelId: string, _pageParam: string) {
    return await axios<ChannelData>(
      `/videos/searchByChannels/search-by-channel-id-${channelId}.json`
    );
  }

  async getSearchVideoListAPI(title: string, _pageParam: string) {
    const titleToLowerCase = title.toLowerCase();
    let data, filteredItems;
    const res = await axios.get("/videos/popular.json");
    data = res.data;
    filteredItems = data.items.filter((i: YoutubeItem) =>
      i.snippet.title.toLowerCase().includes(titleToLowerCase)
    );
    return { items: filteredItems };
  }
}
