import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { getCommentAPI } from "api/comment";
import { CommentType } from "types/commentItem";

interface PropsType {
  videoId: string;
}

const CommentSection: React.FC<PropsType> = ({ videoId }) => {
  const [activeCommentId, setActiveCommentId] = useState<number | null>(null);

  const {
    isLoading,
    error,
    data: commentData,
  } = useQuery({
    queryKey: ["commentData", videoId],
    queryFn: () => getCommentAPI(videoId),
  });

  if (isLoading) return <div>loading...</div>;
  if (error) return <>{"An error has occurred: " + error.message}</>;

  return (
    <>
      <section>
        <h3 className={"a11y-hidden"}>댓글 총 {commentData!.length}개</h3>
        <CommentForm videoId={videoId} />
        <ul>
          {commentData!.map((comment) => (
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
      </section>
    </>
  );
};

export default CommentSection;
