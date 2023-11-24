import React from "react";
import { Link, useNavigate } from "react-router-dom";
import getElapsedTime from "utils/getElapsedTime";
import { useItemStore } from "stores/useItemStore";
import { YoutubeItem } from "types/mainItem";
import styles from "styles/search/SearchCard.module.css";
import decodeHTMLEntities from "utils/setDecodeHTMLEntities";

interface PropsType {
  item: YoutubeItem;
}

const SearchCard: React.FC<PropsType> = ({ item }) => {
  const navigate = useNavigate();
  const { setItemInfo } = useItemStore();
  const { url: src } = item.snippet.thumbnails.high;
  const { id: videoId } = item;
  const { title, channelTitle, channelId, publishedAt, description } =
    item.snippet;

  const handleClickMove = () => {
    setItemInfo({ title, channelTitle, description });
    navigate(`/videos?id=${videoId}&channelId=${channelId}`);
  };

  return (
    <article className={styles["card"]}>
      <div className={styles["card__cover"]} onClick={handleClickMove}>
        <img src={src} alt="" className={styles["card__cover__img"]} />
      </div>
      <div>
        <h3
          onClick={handleClickMove}
          className={`${styles["card__title"]} ellipsis`}
        >
          {decodeHTMLEntities(title)}
        </h3>
        <Link to={`/channel?${channelId}`}>
          <span className={`${styles["card__channel-title"]} ellipsis`}>
            {decodeHTMLEntities(channelTitle)}
          </span>
        </Link>
        <p className={`${styles["card__description"]} ellipsis-multi`}>
          {description}
        </p>
        <p className={styles["card__published-at"]}>
          {getElapsedTime(publishedAt)}
        </p>
      </div>
    </article>
  );
};

export default SearchCard;
