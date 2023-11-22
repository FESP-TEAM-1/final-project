import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useItemStore } from "stores/useItemStore";
import styles from "styles/main/Card.module.css";
import { YoutubeItem } from "types/mainItem";
import getElapsedTime from "utils/getElapsedTime";
import decodeHTMLEntities from "utils/setDecodeHTMLEntities";

interface CardItemType {
  item: YoutubeItem;
}

const Card: React.FC<CardItemType> = ({ item }) => {
  const navigate = useNavigate();
  const { setItemInfo } = useItemStore();
  const { id } = item;
  const { url: src } = item.snippet.thumbnails.standard;
  const { channelTitle, title, description, publishedAt, channelId } =
    item.snippet;

  const handleClickMove = () => {
    setItemInfo({ title, channelTitle, description });
    navigate(`/videos?id=${id}&channelId=${channelId}`);
  };
  return (
    <>
      <article className={styles["card"]}>
        <div className={styles["card__cover"]} onClick={handleClickMove}>
          <img src={src} alt="" className={styles["card__cover__img"]} />
        </div>
        <Link to={`/channel?${channelId}`} style={{ width: "fit-content" }}>
          <span className={styles["card__channel-title"]}>
            {decodeHTMLEntities(channelTitle)}
          </span>
        </Link>
        <div onClick={handleClickMove}>
          <h3 className={`${styles["card__title"]} ellipsis`}>
            {decodeHTMLEntities(title)}
          </h3>
        </div>
        <p className={`${styles["card__description"]} ellipsis-multi`}>
          {decodeHTMLEntities(description)}
        </p>
        <p className={styles["card__published-at"]}>
          {getElapsedTime(publishedAt)}
        </p>
      </article>
    </>
  );
};

export default Card;
