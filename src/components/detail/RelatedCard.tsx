import React from "react";
import { Link, useNavigate } from "react-router-dom";
import getElapsedTime from "utils/getElapsedTime";
import { useItemStore } from "stores/useItemStore";
import { ChannelItem } from "types/detailItem";
import styles from "styles/detail/RelatedCard.module.css";
import decodeHTMLEntities from "utils/setDecodeHTMLEntities";

interface RelatedCardType {
  item: ChannelItem;
}

const RelatedCard: React.FC<RelatedCardType> = ({ item }) => {
  const navigate = useNavigate();
  const { setItemInfo } = useItemStore();
  const { url: src } = item.snippet.thumbnails.high;
  const {
    id: { videoId },
  } = item;
  const { title, channelTitle, channelId, publishedAt, description } =
    item.snippet;

  const handleClickMove = () => {
    setItemInfo({ title, channelTitle, description });
    navigate(`/videos?id=${videoId}&channelId=${channelId}`);
  };

  return (
    <>
      <article className={styles["card"]}>
        <div className={styles["card__cover"]} onClick={handleClickMove}>
          <img src={src} alt="" className={styles["card__cover__img"]} />
        </div>
        <div onClick={handleClickMove}>
          <h3 className={`${styles["card__title"]} ellipsis`}>
            {decodeHTMLEntities(title)}
          </h3>
        </div>
        <Link to={`/channel?${channelId}`} style={{ width: "fit-content" }}>
          <span className={styles["card__channel-title"]}>
            {decodeHTMLEntities(channelTitle)}
          </span>
        </Link>
        <p className={styles["card__published-at"]}>
          {getElapsedTime(publishedAt)}
        </p>
      </article>
    </>
  );
};

export default RelatedCard;
