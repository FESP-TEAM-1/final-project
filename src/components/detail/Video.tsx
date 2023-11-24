import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useItemStore } from "stores/useItemStore";
import styles from "styles/detail/Video.module.css";
import decodeHTMLEntities from "utils/setDecodeHTMLEntities";

interface VideoPropsType {
  videoId: string;
  channelId: string;
}

const Video: React.FC<VideoPropsType> = ({ videoId, channelId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { itemInfo } = useItemStore();

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
        {decodeHTMLEntities(itemInfo.title)}
      </h3>
      <Link to={`/channel/${channelId}`}>
        <p className={styles["video-channel-title"]}>
          {decodeHTMLEntities(itemInfo.channelTitle)}
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
          {decodeHTMLEntities(itemInfo.description)}
        </p>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? "더보기" : "간략히"}
        </button>
      </div>
    </div>
  );
};

export default Video;
