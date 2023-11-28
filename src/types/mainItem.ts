export interface YoutubeItem {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage: string;
  localized: Localized;
  defaultAudioLanguage: string;
}

interface Thumbnails {
  default: Default;
  medium: Medium;
  high: High;
  standard: Standard;
  maxres: Maxres;
}

interface Default {
  url: string;
  width: number;
  height: number;
}

interface Medium {
  url: string;
  width: number;
  height: number;
}

interface High {
  url: string;
  width: number;
  height: number;
}

interface Standard {
  url: string;
  width: number;
  height: number;
}

interface Maxres {
  url: string;
  width: number;
  height: number;
}

interface Localized {
  title: string;
  description: string;
}
// review
// types/mainitem.ts는 의도가 명확하게 보이지 않습니다. 아마 main 페이지에서 보여줄 아이템이라 그렇게 적으신것 같아요.
// PopularVideo.ts 는 어떠신가요? 인터페이스명도 이와 비슷한 방식으로 바뀌면 좋을 것 같아요.
