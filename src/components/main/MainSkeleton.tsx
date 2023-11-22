import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import cardStyles from "styles/main/Card.module.css";
import mainStyles from "styles/main/MainPage.module.css";

const MainSkeleton = () => {
  return (
    <div className={mainStyles.main}>
      {Array(12)
        .fill(0)
        .map(() => (
          <div className={cardStyles["card"]}>
            <div className={cardStyles["card__cover"]}>
              <Skeleton height={"100%"} />
            </div>
            <div className={cardStyles["card__channel-title"]}>
              <Skeleton width={"30%"} />
            </div>
            <div className={`${cardStyles["card__title"]}`}>
              <Skeleton width={"80%"} />
            </div>
            <div className={`${cardStyles["card__description"]}`}>
              <Skeleton height={"2rem"} width={"100%"} />
            </div>
            <div className={cardStyles["card__published-at"]}>
              <Skeleton width={"20%"} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default MainSkeleton;
