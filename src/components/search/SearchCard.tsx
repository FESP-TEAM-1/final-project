import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import useImgLazyLoading from "hooks/useImgLazyLoading";
import useHandleHover from "hooks/useHandleHover";
import getElapsedTime from "utils/getElapsedTime";
import decodeHTMLEntities from "utils/setDecodeHTMLEntities";
import { YoutubeItem } from "types/popularVideo";
import styles from "styles/search/SearchCard.module.css";

interface PropsType {
  item: YoutubeItem;
}

const SearchCard: React.FC<PropsType> = ({ item }) => {
  const navigate = useNavigate();
  const { url: src } = item.snippet.thumbnails.high;
  const { id: videoId } = item;
  const { title, channelTitle, channelId, publishedAt, description } =
    item.snippet;

  const { isHover, handleEnterAutoPlay, handleLeaveAutoPlay } =
    useHandleHover();
  const imgRef = useRef<HTMLImageElement>(null);
  useImgLazyLoading(imgRef);

  const handleClickMove = () => {
    navigate(`/videos?id=${videoId}&channelId=${channelId}`);
  };

  return (
    <article
      className={styles["card"]}
      onMouseEnter={handleEnterAutoPlay}
      onMouseLeave={handleLeaveAutoPlay}
    >
      <div className={styles["card__cover"]} onClick={handleClickMove}>
        {isHover ? (
          <>
            <iframe
              className={styles["card__cover_iframe"]}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0`}
            ></iframe>
            <div className="cover_dim"></div>
          </>
        ) : (
          <img
            data-src={src}
            ref={imgRef}
            alt=""
            className={styles["card__cover__img"]}
          />
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
