import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useItemStore } from "stores/useItemStore";
import axios from "axios";
import styles from "styles/detail/DetailPage.module.css";

const DetailPage: React.FC = () => {
  const { itemInfo } = useItemStore();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const channelId = searchParams.get("channelId");

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
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
      <Link to={`/channel/${channelId}`}>
        <p className={styles["card__channel-title"]}>{itemInfo.channelTitle}</p>
      </Link>
      <h3 className={`${styles["card__title"]} ellipsis-multi`}>
        {itemInfo.title}
      </h3>
      <p className={`${styles["card__description"]} ellipsis`}>
        {itemInfo.description}
      </p>
    </div>
  );
};

export default DetailPage;
