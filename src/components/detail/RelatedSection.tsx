import React from "react";
import RelatedCard from "./RelatedCard";
import { ChannelData, ChannelItem } from "types/detailItem";
import styles from "styles/detail/RelatedSection.module.css";

interface PropsType {
  channelData: ChannelData;
  videoId: string;
}

const RelatedSection: React.FC<PropsType> = ({ channelData, videoId }) => {
  return (
    <>
      <h2 className={styles["related-title"]}>관련된 영상</h2>
      <ul>
        {channelData.items.map((item: ChannelItem) => {
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
