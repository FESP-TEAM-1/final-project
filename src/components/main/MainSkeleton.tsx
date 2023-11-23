import React from "react";
import Skeleton,{SkeletonTheme} from "react-loading-skeleton";
import { useThemeStore } from "stores/useThemeStore";
import "react-loading-skeleton/dist/skeleton.css";
import cardStyles from "styles/main/Card.module.css";
import mainStyles from "styles/main/MainPage.module.css";

const MainSkeleton = () => {
  const { darkMode } = useThemeStore();

  return (
    <SkeletonTheme baseColor={darkMode?"#3f3f3f":"#ebebeb"} highlightColor={darkMode?"#464646":"#f5f5f5"}>
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
    </SkeletonTheme>
  );
};

export default MainSkeleton;
