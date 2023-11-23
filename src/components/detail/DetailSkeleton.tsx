import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import detailStyles from "styles/detail/DetailPage.module.css";
import videolStyles from "styles/detail/Video.module.css";
import relatedCardStyles from "styles/detail/RelatedCard.module.css";

const DetailSkeleton = () => {
  return (
    <main className={detailStyles["detail-main"]}>
      <section className={detailStyles["video-section"]}>
        <article className={videolStyles["video-container"]}>
          <div className={videolStyles["video-cover"]}>
            <Skeleton height={"100%"} style={{ aspectRatio: "16/9" }} />
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
          {Array.from({ length: 6 }, () => (
            <article className={relatedCardStyles["card"]}>
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
  );
};

export default DetailSkeleton;
