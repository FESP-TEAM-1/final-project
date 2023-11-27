import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import decodeHTMLEntities from "utils/setDecodeHTMLEntities";
import styles from "styles/detail/Video.module.css";
import { getVideoAPI } from "api/detail";

const Video: React.FC = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("id")!;
  const channelId = searchParams.get("channelId")!;
  const [isOpen, setIsOpen] = useState(false);

  const {
    isLoading,
    error,
    data: videoData,
  } = useQuery({
    queryKey: ["videoData", videoId],
    queryFn: () => getVideoAPI(videoId, channelId),
  });

  if (isLoading) return <div>loading ...</div>;
  if (error) return <div>{error.message}</div>;

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
        {decodeHTMLEntities(videoData.title)}
      </h3>
      <Link to={`/channel/${videoData.snippet.channelId}`}>
        <p className={styles["video-channel-title"]}>
          {decodeHTMLEntities(videoData.snippet.channelTitle)}
        </p>
      </Link>
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
          {decodeHTMLEntities(videoData.snippet.description)}
        </p>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? "더보기" : "간략히"}
        </button>
      </div>
    </div>
  );
};

export default Video;
