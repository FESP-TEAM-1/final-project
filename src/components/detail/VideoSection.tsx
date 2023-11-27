import React from "react";
import Video from "components/detail/Video";

const VideoSection: React.FC = () => {
  return (
    <>
      <h2 className={"a11y-hidden"}>영상 & 댓글</h2>
      <section>
        <h3 className={"a11y-hidden"}>영상</h3>
        <Video />
      </section>
    </>
  );
};

export default VideoSection;
