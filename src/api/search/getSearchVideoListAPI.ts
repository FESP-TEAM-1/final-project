import axios from "axios";
import { YoutubeItem } from "types/mainItem";

export const getSearchVideoListAPI = async (
  title: string,
  pageParam: string
) => {
  const titleToLowerCase = title.toLowerCase();
  let data, filteredItems;
  // 개발 서버
  if (process.env.NODE_ENV === "development") {
    const res = await axios.get("/videos/popular.json");
    data = res.data;
    filteredItems = data.items.filter((i: YoutubeItem) =>
      i.snippet.title.toLowerCase().includes(titleToLowerCase)
    );
    return { items: filteredItems };
  }
  // 운영 서버
  else {
    const res = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${title}&key=${process.env.REACT_APP_YOUTUBE_PROJECT_API_KEY}&pageToken=${pageParam}&type=video`
    );
    data = res.data;
    return data;
  }
};
