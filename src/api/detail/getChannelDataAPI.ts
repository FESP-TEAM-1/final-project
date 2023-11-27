import axios from "axios";
import { ChannelData } from "types/detailItem";

export const getChannelDataAPI = async (channelId: string) => {
  const { data } = await axios<ChannelData>(
    `/videos/searchByChannels/search-by-channel-id-${channelId}.json`
  );
  return data;
};
