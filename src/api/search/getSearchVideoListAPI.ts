import axios from "axios";
import { YoutubeItem } from "types/mainItem";

export const getSearchVideoListAPI = async (title: string) => {
  const { data } = await axios.get("/videos/popular.json");
  const titleToLowerCase = title.toLowerCase();
  const filteredItems = data.items.filter((i: YoutubeItem) =>
    i.snippet.title.toLowerCase().includes(titleToLowerCase)
  );
  return filteredItems;
};
