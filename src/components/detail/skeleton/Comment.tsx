import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useThemeStore } from "stores/useThemeStore";
import commentFormStyles from "styles/detail/CommentForm.module.css";
import commentSectionStyles from "styles/detail/CommentSection.module.css";

export const CommentSkeleton = () => {
  const { darkMode } = useThemeStore();
  return (
    <SkeletonTheme
      baseColor={darkMode ? "#3f3f3f" : "#ebebeb"}
      highlightColor={darkMode ? "#464646" : "#f5f5f5"}
    >
      <section>
        <div className={commentSectionStyles["comment-section__title"]}>
          <Skeleton width={"8rem"} />
        </div>
        <div className={commentFormStyles["comment-form"]}>
          <Skeleton height={"4rem"} />
        </div>
        <ul>
          {Array.from({ length: 4 }, (_, index) => (
            <li key={index} style={{ marginBottom: "2.5rem" }}>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <div>
                  <Skeleton width={"10rem"} height={"1.25rem"} />
                </div>
                <div>
                  <Skeleton width={"5rem"} height={"1.25rem"} />
                </div>
              </div>
              <div>
                <Skeleton style={{ marginTop: "0.5rem" }} height={"1.25rem"} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </SkeletonTheme>
  );
};
