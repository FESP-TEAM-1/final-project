import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useThemeStore } from "stores/useThemeStore";
import detailStyles from "styles/detail/DetailPage.module.css";
import videolStyles from "styles/detail/Video.module.css";
import relatedCardStyles from "styles/detail/RelatedCard.module.css";

const DetailSkeleton = () => {
  const {darkMode} = useThemeStore();
  return (
    <SkeletonTheme baseColor={darkMode?"#3f3f3f":"#ebebeb"} highlightColor={darkMode?"#464646":"#f5f5f5"}>
    <main className={detailStyles["detail-main"]}>
      <section className={detailStyles["video-section"]}>
        <article className={videolStyles["video-container"]}>
          <div className={videolStyles["video-cover"]}>
            <Skeleton height={"100%"} style={{ aspectRatio: "16/9"}} />
          </div>
          <div className={videolStyles["video-title"]}>
            <Skeleton />
          </div>
          <div className={videolStyles["video-channel-title"]}>
            <Skeleton width={"30%"} />
          </div>
          <div>
            <Skeleton height={"6rem"} />
          </div>
        </article>
      </section>
      <section>
        <ul className={detailStyles["related-videos"]}>
          {Array.from({ length: 6 }, (_, index) => (
            <article key={index} className={relatedCardStyles["card"]}>
              <div className={relatedCardStyles["card__cover"]}>
                <Skeleton height={"100%"} />
                <Skeleton height={"100%"} />
              </div>
              <div>
                <Skeleton />
              </div>
              <div>
                <Skeleton width={"50%"} />
              </div>
              <p>
                <Skeleton width={"50%"} />
              </p>
            </article>
          ))}
        </ul>
      </section>
    </main>
    </SkeletonTheme>
  );
};

export default DetailSkeleton;
