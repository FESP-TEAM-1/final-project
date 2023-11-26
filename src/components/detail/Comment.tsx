import React from "react";
import getElapsedTime from "utils/getElapsedTime";
import { CommentType } from "types/commentItem";
import { deleteCommentAPI } from "api/comment";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "styles/detail/Comment.module.css";

interface CommmetPropsType {
  item: CommentType;
  activeCommentId: number | null;
  setActiveCommentId: React.Dispatch<React.SetStateAction<number | null>>;
  setComments: React.Dispatch<React.SetStateAction<CommentType[]>>;
}

const Comment: React.FC<CommmetPropsType> = ({
  item,
  activeCommentId,
  setActiveCommentId,
  setComments,
}) => {
  const handleClickDeleteComment = (id: number) => async () => {
    const deleteCommmet = await deleteCommentAPI(id);
    setComments((comments) =>
      comments.filter((comment) => comment.id !== deleteCommmet.id)
    );
  };

  return (
    <div className={styles["comment"]}>
      <div className={styles["comment__container"]}>
        <strong className={styles["comment__user"]}>
          @user-{item.anonymous_user_id.split("-").at(-1)}
        </strong>
        <span className={styles["comment__created-at"]}>
          {getElapsedTime(item.created_at)}
        </span>
        <p className={styles["comment__text"]}>{item.text}</p>
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
            <button type="button" onClick={handleClickDeleteComment(item.id)}>
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
