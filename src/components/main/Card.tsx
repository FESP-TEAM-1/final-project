import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useThemeStore } from "stores/useThemeStore";
import getElapsedTime from "utils/getElapsedTime";
import decodeHTMLEntities from "utils/setDecodeHTMLEntities";
import useHoverHandler from "hooks/useHandleHover";
import { YoutubeItem } from "types/mainItem";
import styles from "styles/main/Card.module.css";

interface CardItemType {
  item: YoutubeItem;
}

const Card: React.FC<CardItemType> = ({ item }) => {
  const {
    isHover,
    isElementSingle,
    isElementOnFarRight,
    isElementOnFarLeft,
    handleHover,
  } = useHoverHandler();
  const navigate = useNavigate();
  const { darkMode } = useThemeStore();
  const { id } = item;
  const { url: src } = item.snippet.thumbnails.standard;
  const { channelTitle, title, description, publishedAt, channelId } =
    item.snippet;

  const handleClickMove = () => {
    navigate(`/videos?id=${id}&channelId=${channelId}`);
  };

  return (
    <>
      <article
        className={`${
          isHover && !isElementSingle ? styles["card-hover"] : styles["card"]
        } ${isElementOnFarLeft ? styles["card-left"] : ""} ${
          isElementOnFarRight ? styles["card-right"] : ""
        }`}
        onMouseEnter={(e) => handleHover(e, "enter")}
        onMouseLeave={(e) => handleHover(e, "leave")}
        style={{ backgroundColor: darkMode ? "#0f0f0f" : "#fff" }}
      >
        <div className={styles["card__cover"]} onClick={handleClickMove}>
          {isHover ? (
            <>
              <iframe
                className={styles["card__cover_iframe"]}
                src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0`}
              ></iframe>
              <div className="cover_dim"></div>
            </>
          ) : (
            <img src={src} alt="" className={styles["card__cover__img"]} />
          )}
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
