import axios from "axios";
import { ChannelData } from "types/detailItem";

export const getChannelDataAPI = async (
  channelId: string,
  pageParam: string
) => {
  let data;
  if (process.env.NODE_ENV === "development") {
    const res = await axios<ChannelData>(
      `/videos/searchByChannels/search-by-channel-id-${channelId}.json`
    );
    data = res.data;
  } else {
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_PROJECT_API_KEY}`
    );
    const playlistId =
      res.data.items[0].contentDetails.relatedPlaylists.uploads;
    const res2 =
      await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_PROJECT_API_KEY}&pageToken=${pageParam}
    `);

    data = res2.data;
  }
  return data;
};
