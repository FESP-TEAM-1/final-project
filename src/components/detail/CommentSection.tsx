import React, { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { useYoutubeApi } from "context/YoutubeApiContext";
import styles from "styles/detail/CommentSection.module.css";
import { CommentSkeleton } from "./skeleton";

interface PropsType {
  videoId: string;
}

const CommentSection: React.FC<PropsType> = ({ videoId }) => {
  const [activeCommentId, setActiveCommentId] = useState<number | null>(null);
  const youtube = useYoutubeApi();

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
  });

  if (status === "pending") return <CommentSkeleton />;
  if (status === "error")
    return <>{"An error has occurred: " + error.message}</>;

  return (
    <>
      <section>
        <h3 className={styles["comment-section__title"]}>
          댓글 {commentData.pages[0]["pageInfo"]["totalResults"]}개
        </h3>
        <CommentForm videoId={videoId} />
        <ul>
          {commentData.pages
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
