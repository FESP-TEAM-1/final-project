import axios from "axios";

export const getVideoListAPI = async (pageParam: string) => {
  let data;
  if (process.env.NODE_ENV === "development") {
    const res = await axios.get("/videos/popular.json");
    data = res.data;
  } else {
    const res = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=kr&key=${process.env.REACT_APP_YOUTUBE_PROJECT_API_KEY}&maxResults=50&pageToken=${pageParam}`
    );
    data = res.data;
  }
  return data;
};
