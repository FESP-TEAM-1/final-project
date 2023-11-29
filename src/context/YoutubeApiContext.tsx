import { createContext, useContext } from "react";
import Youtube from "api/youtube";
import YoutubeClient from "api/youtubeClient";
import FakeYoutubeClient from "api/fakeYoutubeClient";

export const YoutubeApiContext = createContext<Youtube | null>(null);

let client = null;
if (process.env.NODE_ENV === "development") {
  client = new FakeYoutubeClient();
} else {
  client = new YoutubeClient();
}
const youtube = new Youtube(client);

export function YoutubeApiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <YoutubeApiContext.Provider value={youtube}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
