import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { getCommentAPI, insertCommentAPI } from "api/comment";
import { CommentType } from "types/commentItem";

interface PropsType {
  videoId: string;
}

const CommentSection: React.FC<PropsType> = ({ videoId }) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [activeCommentId, setActiveCommentId] = useState<number | null>(null);

  const handleSubmitCommentForm = async (
    videoId: string,
    commentInputValue: string
  ) => {
    const newComment = await insertCommentAPI(videoId, commentInputValue);
    setComments((prev) => [newComment, ...prev])!;
  };

  useEffect(() => {
    (async () => {
      const res = await getCommentAPI(videoId);
      setComments(res);
    })();
  }, [videoId]);

  return (
    <>
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
    </>
  );
};

export default CommentSection;
