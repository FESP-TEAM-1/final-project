import React from "react";
import { Link } from "react-router-dom";
import { useItemStore } from "stores/useItemStore";
import styles from "styles/detail/Video.module.css";

interface VideoPropsType {
  videoId: string;
  channelId: string;
}

const Video: React.FC<VideoPropsType> = ({ videoId, channelId }) => {
  const { itemInfo } = useItemStore();
  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
      <Link to={`/channel/${channelId}`}>
        <p className={styles["card__channel-title"]}>{itemInfo.channelTitle}</p>
      </Link>
      <h3 className={`${styles["card__title"]} ellipsis-multi`}>
        {itemInfo.title}
      </h3>
      <p className={`${styles["card__description"]} ellipsis`}>
        {itemInfo.description}
      </p>
    </div>
  );
};

export default Video;
