// TODO: video id 유효값 조회 후 notfound 페이지 전환
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Video from "components/detail/Video";
import RelatedCard from "components/detail/RelatedCard";
import DetailSkeleton from "components/detail/DetailSkeleton";
import { ChannelItem } from "types/detailItem";
import styles from "styles/detail/DetailPage.module.css";

const DetailPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("id")!;
  const channelId = searchParams.get("channelId")!;

  const getChannelData = async () => {
    const { data } = await axios.get(
      `/videos/searchByChannels/search-by-channel-id-${channelId}.json`
    );
    return data;
  };

  const {
    isLoading,
    error,
    data: channelData,
  } = useQuery({
    queryKey: ["channelData"],
    queryFn: getChannelData,
  });

  if (isLoading) return <DetailSkeleton />;
  if (error) return <>{"An error has occurred: " + error.message}</>;

  return (
    <main className={styles["detail-main"]}>
      <section className={styles["video-section"]}>
        <Video videoId={videoId} channelId={channelId} />
      </section>
      <section>
        <h2 className={styles["related-title"]}>관련된 영상</h2>
        <ul className={styles["related-videos"]}>
          {channelData.items.map((item: ChannelItem) => {
            if (item.id.videoId === videoId) return;
            return (
              <li key={item.id.videoId}>
                <RelatedCard item={item} />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default DetailPage;
