import React from "react";
import { useSearchParams } from "react-router-dom";
import RelatedCard from "./RelatedCard";
import { ChannelItem } from "types/detailItem";
import { useQuery } from "@tanstack/react-query";
import { getChannelDataAPI } from "api/detail";
import styles from "styles/detail/RelatedSection.module.css";

const RelatedSection: React.FC = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("id")!;
  const channelId = searchParams.get("channelId")!;

  const {
    isLoading,
    error,
    data: channelData,
  } = useQuery({
    queryKey: ["channelData"],
    queryFn: () => getChannelDataAPI(channelId),
  });

  if (isLoading) return <div>loading...axios</div>;
  if (error) return <>{"An error has occurred: " + error.message}</>;

  return (
    <>
      <h2 className={styles["related-title"]}>관련된 영상</h2>
      <ul>
        {channelData!.items.map((item: ChannelItem) => {
          if (item.id.videoId === videoId) return;
          return (
            <li key={item.id.videoId}>
              <RelatedCard item={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default RelatedSection;
