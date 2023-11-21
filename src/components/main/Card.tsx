import React from "react";
import styles from "styles/main/Card.module.css";

interface CardItemType {
  item: CardType;
}

interface CardType {
  src: string;
  title: string;
  description: string;
  publishedAt: string;
  channelTitle: string;
}

// const Card = ({ item }: { item: CardType }) => {
const Card: React.FC<CardItemType> = ({ item }) => {
  const { src, channelTitle, title, description, publishedAt } = item;
  return (
    <>
      <article className={styles["card"]}>
        <div className={styles["card__cover"]}>
          <img src={src} alt="" className={styles["card__cover__img"]} />
        </div>
        <p className={styles["card__channel-title"]}>{channelTitle}</p>
        <h3 className={`${styles["card__title"]} ellipsis-multi`}>{title}</h3>
        <p className={`${styles["card__description"]} ellipsis`}>
          {description}
        </p>
        <p className={styles["card__published-at"]}>{publishedAt}</p>
      </article>
    </>
  );
};

export default Card;
