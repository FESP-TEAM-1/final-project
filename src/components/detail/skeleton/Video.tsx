import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useThemeStore } from "stores/useThemeStore";
import videolStyles from "styles/detail/Video.module.css";

export const VideoSkeleton = () => {
  const { darkMode } = useThemeStore();
  return (
    <SkeletonTheme
      baseColor={darkMode ? "#3f3f3f" : "#ebebeb"}
      highlightColor={darkMode ? "#464646" : "#f5f5f5"}
    >
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
    </SkeletonTheme>
  );
};
