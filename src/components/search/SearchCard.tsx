import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import getElapsedTime from "utils/getElapsedTime";
import { YoutubeItem } from "types/mainItem";
import styles from "styles/search/SearchCard.module.css";
import decodeHTMLEntities from "utils/setDecodeHTMLEntities";

interface PropsType {
  item: YoutubeItem;
}

const SearchCard: React.FC<PropsType> = ({ item }) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);
  const { url: src } = item.snippet.thumbnails.high;
  const { id: videoId } = item;
  const { title, channelTitle, channelId, publishedAt, description } =
    item.snippet;

  const handleClickMove = () => {
    navigate(`/videos?id=${videoId}&channelId=${channelId}`);
  };

  const handleHover = (event: string) => {
    if (event === "enter") {
      const timeoutId = window.setTimeout(() => {
        setIsHover(true);
      }, 500);
      setHoverTimeout(timeoutId);
    } else {
      // 마우스가 엘리먼트를 떠나는 경우
      if (hoverTimeout) clearTimeout(hoverTimeout);
      setIsHover(false);
    }
  };

  return (
    <article
      className={styles["card"]}
      onMouseEnter={() => handleHover("enter")}
      onMouseLeave={() => handleHover("leave")}
    >
      <div className={styles["card__cover"]} onClick={handleClickMove}>
        {isHover ? (
          <iframe
            className={styles["card__cover_iframe"]}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0`}
          ></iframe>
        ) : (
          <img src={src} alt="" className={styles["card__cover__img"]} />
        )}
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
