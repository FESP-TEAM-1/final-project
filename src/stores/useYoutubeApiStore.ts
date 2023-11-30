import { create } from "zustand";
import { persist } from "zustand/middleware";
import FakeYoutubeClient from "api/fakeYoutubeClient";
import YoutubeClient from "api/youtubeClient";
import Youtube from "api/youtube";

let client = null;
if (process.env.NODE_ENV === "production") {
  client = new FakeYoutubeClient();
} else {
  client = new YoutubeClient();
}
const youtube = new Youtube(client);

interface useYoutubeApiStoreType {
  youtube: Youtube;
}

const useYoutubeApiStore = create<useYoutubeApiStoreType>(() => ({
  youtube,
}));

export default useYoutubeApiStore;
