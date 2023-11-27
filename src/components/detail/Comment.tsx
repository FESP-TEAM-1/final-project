import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import getElapsedTime from "utils/getElapsedTime";
import { CommentType } from "types/commentItem";
import { deleteCommentAPI } from "api/comment";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "styles/detail/Comment.module.css";
import decodeHTMLEntities from "utils/setDecodeHTMLEntities";

interface CommmetPropsType {
  item: CommentType;
  activeCommentId: number | null;
  setActiveCommentId: React.Dispatch<React.SetStateAction<number | null>>;
  videoId: string;
}

const Comment: React.FC<CommmetPropsType> = ({
  item,
  activeCommentId,
  setActiveCommentId,
  videoId,
}) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (id: number) => deleteCommentAPI(id),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["commentData", videoId] }),
  });

  return (
    <div className={styles["comment"]}>
      <div className={styles["comment__container"]}>
        <strong className={styles["comment__user"]}>
          @user-{item.anonymous_user_id.split("-").at(-1)}
        </strong>
        <span className={styles["comment__created-at"]}>
          {getElapsedTime(item.created_at)}
        </span>
        <p className={styles["comment__text"]}>
          {decodeHTMLEntities(item.text as string)}
        </p>
      </div>

      <button
        type="button"
        className={`${styles["comment__ellipsis"]} ${
          item.id === activeCommentId && styles["active"]
        }`}
        onClick={() => setActiveCommentId(item.id)}
      >
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </button>

      {item.id === activeCommentId && (
        <>
          <div className={styles["comment__button-list"]}>
            <button type="button">신고</button>
            <button type="button" onClick={() => mutate(item.id)}>
              삭제
            </button>
          </div>
          <div className="dim" onClick={() => setActiveCommentId(null)}></div>
        </>
      )}
    </div>
  );
};

export default Comment;
