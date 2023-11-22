import React from "react";
import { Link } from "react-router-dom";
import styles from "styles/main/Card.module.css";
import { YoutubeItem } from "types/mainItem";
import getElapsedTime from "utils/getElapsedTime";

interface CardItemType {
  item: YoutubeItem;
}

const Card: React.FC<CardItemType> = ({ item }) => {
  const { id } = item;
  const { url: src } = item.snippet.thumbnails.standard;
  const { channelTitle, title, description, publishedAt, channelId } =
    item.snippet;
  return (
    <>
      <article className={styles["card"]}>
        <div className={styles["card__cover"]}>
          <Link to={`/videos/${id}`}>
            <img src={src} alt="" className={styles["card__cover__img"]} />
          </Link>
        </div>
        <Link to={`/channel/${channelId}`}>
          <p className={styles["card__channel-title"]}>{channelTitle}</p>
        </Link>
        <Link to={`/videos/${id}`}>
          <h3 className={`${styles["card__title"]} ellipsis-multi`}>{title}</h3>
        </Link>
        <p className={`${styles["card__description"]} ellipsis`}>
          {description}
        </p>
        <p className={styles["card__published-at"]}>
          {getElapsedTime(publishedAt)}
        </p>
      </article>
    </>
  );
};

export default Card;
