// TODO: video id 유효값 조회 후 notfound 페이지 전환
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Video from "components/detail/Video";
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

  if (isLoading) return <>"Loading..."</>;
  if (error) return <>{"An error has occurred: " + error.message}</>;

  return (
    <div>
      <Video videoId={videoId} channelId={channelId} />
    </div>
  );
};

export default DetailPage;
