import React from "react";
import { useSearchParams } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import RelatedCard from "./RelatedCard";
import { RelatedSkeleton } from "./skeleton";
import useYoutubeApiStore from "stores/useYoutubeApiStore";
import useHandleScroll from "hooks/useHandleScroll";
import styles from "styles/detail/RelatedSection.module.css";

const RelatedSection: React.FC = () => {
  const { youtube } = useYoutubeApiStore();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("id")!;
  const channelId = searchParams.get("channelId")!;

  const {
    status,
    data: channelData,
    error,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["channelData", channelId],
    queryFn: ({ pageParam }) => youtube.getChannelData(channelId, pageParam),
    initialPageParam: "",
    getNextPageParam: (lastPage) => lastPage.nextPageToken || undefined,
  });

  useHandleScroll(fetchNextPage);

  if (status === "pending") return <RelatedSkeleton />;
  if (status === "error")
    return <>{"An error has occurred: " + error.message}</>;

  return (
    <>
      <h2 className={styles["related-title"]}>관련된 영상</h2>
      <ul>
        {channelData?.pages
          .flatMap((page) => page.items)
          .map((item, i) => {
            if (item.snippet.resourceId.videoId === videoId) return;
            return (
              <li key={i}>
                <RelatedCard item={item} />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default RelatedSection;
