import { create } from "zustand";
import FakeYoutubeClient from "api/fakeYoutubeClient";
import YoutubeClient from "api/youtubeClient";
import Youtube from "api/youtube";

let client = null;
if (process.env.NODE_ENV === "development") {
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
