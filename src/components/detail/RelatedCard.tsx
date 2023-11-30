import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChannelItem } from "types/detailItem";
import getElapsedTime from "utils/getElapsedTime";
import decodeHTMLEntities from "utils/setDecodeHTMLEntities";
import useImgLazyLoading from "hooks/useImgLazyLoading";
import useHandleHover from "hooks/useHandleHover";
import styles from "styles/detail/RelatedCard.module.css";

interface RelatedCardType {
  item: ChannelItem;
}

const RelatedCard: React.FC<RelatedCardType> = ({ item }) => {
  const { isHover, handleEnterAutoPlay, handleLeaveAutoPlay } =
    useHandleHover();
  const imgRef = useRef<HTMLImageElement>(null);
  useImgLazyLoading(imgRef);

  const navigate = useNavigate();
  const { url: src } = item.snippet.thumbnails.high;
  const { videoId } = item.snippet.resourceId;
  const { title, channelTitle, channelId, publishedAt } = item.snippet;

  const handleClickMove = () => {
    navigate(`/videos?id=${videoId}&channelId=${channelId}`);
  };

  return (
    <>
      <article
        className={styles["card"]}
        onMouseEnter={handleEnterAutoPlay}
        onMouseLeave={handleLeaveAutoPlay}
      >
        <div className={styles["card__cover"]} onClick={handleClickMove}>
          {isHover ? (
            <>
              <iframe
                className={styles["card__cover__iframe"]}
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0`}
              ></iframe>
              <div className="cover_dim"></div>
            </>
          ) : (
            <img
              data-src={src}
              ref={imgRef}
              className={styles["card__cover__img"]}
            />
          )}
        </div>
        <div>
          <div onClick={handleClickMove}>
            <h3 className={`${styles["card__title"]} ellipsis-multi`}>
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
        </div>
      </article>
    </>
  );
};

export default RelatedCard;
