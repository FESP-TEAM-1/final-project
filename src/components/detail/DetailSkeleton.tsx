import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useThemeStore } from "stores/useThemeStore";
import detailStyles from "styles/detail/DetailPage.module.css";
import videolStyles from "styles/detail/Video.module.css";
import relatedCardStyles from "styles/detail/RelatedCard.module.css";
import commentFormStyles from "styles/detail/CommentForm.module.css";

const DetailSkeleton = () => {
  const { darkMode } = useThemeStore();
  return (
    <SkeletonTheme
      baseColor={darkMode ? "#3f3f3f" : "#ebebeb"}
      highlightColor={darkMode ? "#464646" : "#f5f5f5"}
    >
      <main className={detailStyles["detail-main"]}>
        <section className={detailStyles["left-section"]}>
          {/* 영상 보기 */}
          <section>
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
          {/* 댓글 */}
          <section>
            <div className={commentFormStyles["comment-form"]}>
              <Skeleton height={"4rem"} />
            </div>
            <ul>
              {Array.from({ length: 4 }, (_, index) => (
                <li key={index} style={{ marginBottom: "2rem" }}>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <div>
                      <Skeleton width={"15rem"} height={"1.25rem"} />
                    </div>
                    <div>
                      <Skeleton width={"5rem"} height={"1.25rem"} />
                    </div>
                  </div>
                  <div>
                    <Skeleton
                      style={{ marginTop: "0.5rem" }}
                      height={"1.25rem"}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </section>
        <section className={detailStyles["right-section"]}>
          {/* 관련 영상 리스트 */}
          <section>
            <ul>
              {Array.from({ length: 6 }, (_, index) => (
                <article key={index} className={relatedCardStyles["card"]}>
                  <div className={relatedCardStyles["card__cover"]}>
                    <Skeleton height={"100%"} />
                  </div>
                  <div>
                    <div>
                      <Skeleton style={{ marginBottom: "0.25rem" }} />
                    </div>
                    <div>
                      <Skeleton
                        width={"50%"}
                        style={{ marginBottom: "0.25rem" }}
                      />
                    </div>
                    <p>
                      <Skeleton width={"50%"} />
                    </p>
                  </div>
                </article>
              ))}
            </ul>
          </section>
        </section>
      </main>
    </SkeletonTheme>
  );
};

export default DetailSkeleton;
