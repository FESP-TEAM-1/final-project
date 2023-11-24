import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useThemeStore } from "stores/useThemeStore";
import styles from "styles/search/SearchCard.module.css";

const SearchSkeleton = () => {
  const { darkMode } = useThemeStore();

  return (
    <SkeletonTheme
      baseColor={darkMode ? "#3f3f3f" : "#ebebeb"}
      highlightColor={darkMode ? "#464646" : "#f5f5f5"}
    >
      {Array.from({ length: 4 }, (_, index) => (
        <article key={index} className={styles["card"]}>
          <div className={styles["card__cover"]}>
            <Skeleton width={"100%"} height={"100%"} />
          </div>
          <div>
            <div>
              <Skeleton width={"50%"} style={{ lineHeight: 1.5 }} />
            </div>
            <div>
              <Skeleton width={"50%"} style={{ lineHeight: 1.5 }} />
            </div>
            <div>
              <Skeleton height={"2rem"} style={{ lineHeight: 1.5 }} />
            </div>
            <p>
              <Skeleton width={"20%"} style={{ lineHeight: 1.5 }} />
            </p>
          </div>
        </article>
      ))}
    </SkeletonTheme>
  );
};

export default SearchSkeleton;
