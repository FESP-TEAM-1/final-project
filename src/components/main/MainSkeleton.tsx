import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import cardStyles from "styles/main/Card.module.css";
import mainStyles from "styles/main/MainPage.module.css";

const MainSkeleton = () => {
  return (
    <div className={mainStyles.main}>
      {Array.from({ length: 12 }, () => (
        <div className={cardStyles["card"]}>
          <div className={cardStyles["card__cover"]}>
            <Skeleton height={"100%"} />
          </div>
          <div>
            <Skeleton width={"30%"} />
          </div>
          <div>
            <Skeleton width={"80%"} />
          </div>
          <div>
            <Skeleton height={"2rem"} width={"100%"} />
          </div>
          <div>
            <Skeleton width={"20%"} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainSkeleton;
