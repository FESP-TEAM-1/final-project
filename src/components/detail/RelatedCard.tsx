import React, { useState } from "react";
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
  const [isHover, setIsHover] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);
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
  // review
  // handleHover라는 함수가 2가지 일을 하는 것 같아요
  // handleEnterAutoPlay, handleLeaveAutoPlay 이런식으로 이름을 지어주면 좋을 것 같고요.

  return (
    <>
      <article
        className={styles["card"]}
        onMouseEnter={() => handleHover("enter")}
        onMouseLeave={() => handleHover("leave")}
      >
        <div className={styles["card__cover"]} onClick={handleClickMove}>
          {isHover ? (
            <iframe
              className="card__cover__iframe"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0`}
            ></iframe>
          ) : (
            <img src={src} alt="" className={styles["card__cover__img"]} />
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
