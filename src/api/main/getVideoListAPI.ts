import axios from "axios";

export const getVideoListAPI = async () => {
  const { data } = await axios.get("/videos/popular.json");
  return data;
};
