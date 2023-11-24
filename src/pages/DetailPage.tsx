// TODO: video id 유효값 조회 후 notfound 페이지 전환
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Video from "components/detail/Video";
import RelatedCard from "components/detail/RelatedCard";
import DetailSkeleton from "components/detail/DetailSkeleton";
import CommentForm from "components/detail/CommentForm";
import Comment from "components/detail/Comment";
import { ChannelItem } from "types/detailItem";
import { CommentType } from "types/commentItem";
import { getCommentAPI, insertCommentAPI } from "api/comment";
import styles from "styles/detail/DetailPage.module.css";

const getChannelData = async (channelId: string) => {
  const { data } = await axios.get(
    `/videos/searchByChannels/search-by-channel-id-${channelId}.json`
  );
  return data;
};

const DetailPage: React.FC = () => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [searchParams] = useSearchParams();
  const [activeCommentId, setActiveCommentId] = useState<number | null>(null);
  const videoId = searchParams.get("id")!;
  const channelId = searchParams.get("channelId")!;

  const {
    isLoading,
    error,
    data: channelData,
  } = useQuery({
    queryKey: ["channelData"],
    queryFn: () => getChannelData(channelId),
  });

  useEffect(() => {
    (async () => {
      const res = await getCommentAPI(videoId);
      setComments(res);
    })();
  }, [videoId]);

  const handleSubmitCommentForm = async (
    videoId: string,
    commentInputValue: string
  ) => {
    const newComment = await insertCommentAPI(videoId, commentInputValue);
    setComments((prev) => [newComment, ...prev])!;
  };

  if (isLoading) return <DetailSkeleton />;
  if (error) return <>{"An error has occurred: " + error.message}</>;

  return (
    <main className={styles["detail-main"]}>
      <section className={styles["left-section"]}>
        <h2 className={"a11y-hidden"}>영상 & 댓글</h2>
        <section className={styles["video-section"]}>
          <h3 className={"a11y-hidden"}>영상</h3>
          <Video videoId={videoId} channelId={channelId} />
        </section>
        <section>
          <h3 className={"a11y-hidden"}>댓글 총 {comments.length}개</h3>
          <CommentForm videoId={videoId} onSubmit={handleSubmitCommentForm} />
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <Comment
                  item={comment}
                  activeCommentId={activeCommentId}
                  setActiveCommentId={setActiveCommentId}
                  setComments={setComments}
                />
              </li>
            ))}
          </ul>
        </section>
      </section>
      <section className={styles["right-section"]}>
        <h2 className={styles["related-title"]}>관련된 영상</h2>
        <ul className={styles["related-videos"]}>
          {channelData.items.map((item: ChannelItem) => {
            if (item.id.videoId === videoId) return;
            return (
              <li key={item.id.videoId}>
                <RelatedCard item={item} />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default DetailPage;
