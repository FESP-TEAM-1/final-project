import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useThemeStore } from "stores/useThemeStore";
import relatedCardStyles from "styles/detail/RelatedCard.module.css";

export const RelatedSkeleton = () => {
  const { darkMode } = useThemeStore();
  return (
    <SkeletonTheme
      baseColor={darkMode ? "#3f3f3f" : "#ebebeb"}
      highlightColor={darkMode ? "#464646" : "#f5f5f5"}
    >
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
                  <Skeleton width={"50%"} style={{ marginBottom: "0.25rem" }} />
                </div>
                <p>
                  <Skeleton width={"50%"} />
                </p>
              </div>
            </article>
          ))}
        </ul>
      </section>
    </SkeletonTheme>
  );
};
