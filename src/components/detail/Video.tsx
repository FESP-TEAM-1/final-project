import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { VideoSkeleton } from "./skeleton";
import { YoutubeItem, Snippet } from "types/popularVideo";
import useYoutubeApiStore from "stores/useYoutubeApiStore";
import decodeHTMLEntities from "utils/setDecodeHTMLEntities";
import styles from "styles/detail/Video.module.css";

const Video: React.FC = () => {
  const { youtube } = useYoutubeApiStore();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("id")!;
  const channelId = searchParams.get("channelId")!;
  const [isOpen, setIsOpen] = useState(false);

  const {
    status,
    data: videoData,
    error,
  } = useQuery<YoutubeItem, Error, Snippet>({
    queryKey: ["videoData", videoId],
    queryFn: () => youtube!.getVideo(videoId, channelId),
    select: (videoData) => videoData.snippet,
  });

  if (status === "pending") return <VideoSkeleton />;
  if (status === "error") return <div>{error.message}</div>;

  return (
    <div className={styles["video-container"]}>
      <div className={styles["video-cover"]}>
        <iframe
          className={styles["video-iframe"]}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
          allowFullScreen={true}
        ></iframe>
      </div>
      <h3 className={styles["video-title"]}>
        {decodeHTMLEntities(videoData?.title)}
      </h3>
      <Link to={`/channel/${videoData?.channelId}`}>
        <p className={styles["video-channel-title"]}>
          {decodeHTMLEntities(videoData?.channelTitle)}
        </p>
      </Link>

      {videoData?.description && (
        <div
          className={`${styles["video-description"]} ${
            !isOpen && styles["pointer"]
          }`}
          onClick={() => {
            !isOpen && setIsOpen(true);
          }}
        >
          <p
            className={`${styles["video-description__content"]} ${
              !isOpen && "ellipsis-multi"
            }`}
          >
            {decodeHTMLEntities(videoData?.description)}
          </p>
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? "더보기" : "간략히"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Video;
