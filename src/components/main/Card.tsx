import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useItemStore } from "stores/useItemStore";
import { useThemeStore } from "stores/useThemeStore";
import getElapsedTime from "utils/getElapsedTime";
import decodeHTMLEntities from "utils/setDecodeHTMLEntities";
import { YoutubeItem } from "types/mainItem";
import styles from "styles/main/Card.module.css";

interface CardItemType {
  item: YoutubeItem;
}

const Card: React.FC<CardItemType> = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  const [isElementSingle, setIsElementSingle] = useState(false);
  const [isElementOnFarRight, setIsElementOnFarRight] = useState(false);
  const [isElementOnFarLeft, setIsElementOnFarLeft] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);
  const navigate = useNavigate();
  const { setItemInfo } = useItemStore();
  const { darkMode } = useThemeStore();
  const { id } = item;
  const { url: src } = item.snippet.thumbnails.standard;
  const { channelTitle, title, description, publishedAt, channelId } = item.snippet;

  const handleClickMove = () => {
    setItemInfo({ title, channelTitle, description });
    navigate(`/videos?id=${id}&channelId=${channelId}`);
  };

  const handleHover = (e: React.MouseEvent, event: string) => {
    if (event === "enter") {
      // 마우스가 엘리먼트에 진입하는 경우
      const currentTargetRight = e.currentTarget.getBoundingClientRect().right;
      const currentTargetLeft = e.currentTarget.getBoundingClientRect().left;
      const elementRight = window.innerWidth - 32 - 20; // 패딩 값, 스크롤 너비 값
      const elementLeft = 0 + 32; // 패딩 값

      if (currentTargetLeft <= elementLeft && currentTargetRight >= elementRight) {
        // 엘리먼트가 1개일 경우
        setIsElementSingle(true);
      } else {
        // 엘리먼트가 2개 이상
        setIsElementOnFarLeft(currentTargetLeft <= elementLeft); // 엘리먼트가 제일 왼쪽에 있는 경우
        setIsElementOnFarRight(currentTargetRight >= elementRight); // 엘리먼트가 제일 오른쪽에 있는 경우
        setIsElementSingle(false);
      }

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
    <>
      <article
        className={`${isHover && !isElementSingle ? styles["card-hover"] : styles["card"]} ${isElementOnFarLeft ? styles["card-left"] : ""} ${isElementOnFarRight ? styles["card-right"] : ""}`}
        onMouseEnter={(e) => handleHover(e, "enter")}
        onMouseLeave={(e) => handleHover(e, "leave")}
        style={{ backgroundColor: darkMode ? "#0f0f0f" : "#fff" }}
      >
        <div className={styles["card__cover"]} onClick={handleClickMove}>
          {isHover ? <iframe className={styles["card__cover_iframe"]} src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0`}></iframe> : <img src={src} alt="" className={styles["card__cover__img"]} />}
        </div>
        <Link to={`/channel?${channelId}`} style={{ width: "fit-content" }}>
          <span className={styles["card__channel-title"]}>{decodeHTMLEntities(channelTitle)}</span>
        </Link>
        <div onClick={handleClickMove}>
          <h3 className={`${styles["card__title"]} ellipsis`}>{decodeHTMLEntities(title)}</h3>
        </div>
        <p className={`${styles["card__description"]} ellipsis-multi`}>{decodeHTMLEntities(description)}</p>
        <p className={styles["card__published-at"]}>{getElapsedTime(publishedAt)}</p>
      </article>
    </>
  );
};

export default Card;
