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
import {
  AllCommentType,
  SetActiveButtonIdType,
  handleClickDeleteType,
  handleClickInsertType,
} from "types/commentItem";
import { getCommentAPI, deleteCommentAPI, insertCommentAPI } from "api/comment";
import styles from "styles/detail/DetailPage.module.css";

const DetailPage: React.FC = () => {
  const [comments, setComments] = useState<AllCommentType[]>([]);
  const [activeButtonId, setActiveButtonId] = useState<number | null>(null);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("id")!;
  const channelId = searchParams.get("channelId")!;

  const getChannelData = async () => {
    const { data } = await axios.get(
      `/videos/searchByChannels/search-by-channel-id-${channelId}.json`
    );
    return data;
  };

  const {
    isLoading,
    error,
    data: channelData,
  } = useQuery({
    queryKey: ["channelData"],
    queryFn: getChannelData,
  });

  useEffect(() => {
    getCommentAPI(videoId, setComments);
  }, [videoId]);

  // 버튼 리스트 클릭
  const handleClickEllipsis: SetActiveButtonIdType = (id) => {
    setActiveButtonId(id);
  };

  // 댓글 지우기
  const handleClickDelete: handleClickDeleteType = (id: number) => {
    deleteCommentAPI(id, comments, setComments);
  };

  // 댓글 추가
  const handleClickInsert: handleClickInsertType = (
    videoId: string,
    commentInput: string
  ) => {
    insertCommentAPI(videoId, commentInput, comments, setComments);
  };

  if (isLoading) return <DetailSkeleton />;
  if (error) return <>{"An error has occurred: " + error.message}</>;

  return (
    <main className={styles["detail-main"]}>
      <section className={styles["left-section"]}>
        <section className={styles["video-section"]}>
          <Video videoId={videoId} channelId={channelId} />
        </section>
        <section>
          <CommentForm
            videoId={videoId}
            handleClickInsert={handleClickInsert}
          />
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <Comment
                  id={comment.id}
                  userId={comment.anonymous_user_id}
                  createdAt={comment.created_at}
                  text={comment.text}
                  isActive={activeButtonId === comment.id}
                  setActiveCommentId={handleClickEllipsis}
                  handleClickDelete={handleClickDelete}
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
