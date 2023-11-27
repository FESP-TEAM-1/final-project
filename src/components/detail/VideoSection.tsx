import React from "react";
import Video from "components/detail/Video";

interface VideoPropsType {
  videoId: string;
  channelId: string;
}

const VideoSection: React.FC<VideoPropsType> = ({ videoId, channelId }) => {
  return (
    <>
      <h2 className={"a11y-hidden"}>영상 & 댓글</h2>
      <section>
        <h3 className={"a11y-hidden"}>영상</h3>
        <Video videoId={videoId} channelId={channelId} />
      </section>
    </>
  );
};

export default VideoSection;
