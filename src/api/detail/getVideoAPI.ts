import axios from "axios";
import { YoutubeItem } from "types/mainItem";
import { ChannelData, ChannelItem } from "types/detailItem";

export const getVideoAPI = async (videoId: string, channelId: string) => {
  if (process.env.NODE_ENV === "development") {
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
  } else {
    const { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_PROJECT_API_KEY}`
    );
    return data.items[0];
  }
};
