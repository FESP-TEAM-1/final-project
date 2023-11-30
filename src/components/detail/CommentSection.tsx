import React, { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { CommentSkeleton } from "./skeleton";
import useYoutubeApiStore from "stores/useYoutubeApiStore";
import styles from "styles/detail/CommentSection.module.css";

interface PropsType {
  videoId: string;
}

const CommentSection: React.FC<PropsType> = ({ videoId }) => {
  const [activeCommentId, setActiveCommentId] = useState<number | null>(null);
  const { youtube } = useYoutubeApiStore();
  const {
    status,
    data: commentData,
    error,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["commentData", videoId],
    queryFn: ({ pageParam }) => youtube!.getComment(videoId, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPageToken || undefined,
    select: (data) => data.pages,
  });

  if (status === "pending") return <CommentSkeleton />;
  if (status === "error")
    return <>{"An error has occurred: " + error.message}</>;

  return (
    <>
      <section>
        <h3 className={styles["comment-section__title"]}>
          댓글 {commentData[0]["pageInfo"]["totalResults"]}개
        </h3>
        <CommentForm videoId={videoId} />
        <ul>
          {commentData
            .flatMap((page) => page.items)
            .map((comment) => (
              <li key={comment.id}>
                <Comment
                  item={comment}
                  activeCommentId={activeCommentId}
                  setActiveCommentId={setActiveCommentId}
                  videoId={videoId}
                />
              </li>
            ))}
        </ul>
        {hasNextPage && (
          <button
            type="button"
            onClick={() => fetchNextPage()}
            className={styles["comment__more_button"]}
          >
            더보기
          </button>
        )}
      </section>
    </>
  );
};

export default CommentSection;
