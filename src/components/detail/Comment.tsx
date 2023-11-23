import React, { useState } from "react";
import getElapsedTime from "utils/getElapsedTime";
import {
  CommentType,
  SetActiveButtonIdType,
  handleClickDeleteType,
} from "types/commentItem";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "styles/detail/Comment.module.css";

interface newCommentType extends CommentType {
  isActive: boolean;
  setActiveCommentId: SetActiveButtonIdType;
  handleClickDelete: handleClickDeleteType;
}

const Comment: React.FC<newCommentType> = ({
  id,
  userId,
  createdAt,
  text,
  isActive,
  setActiveCommentId,
  handleClickDelete,
}) => {
  const handleClickEllipsis = () => {
    setActiveCommentId(isActive ? null : id); // 현재 댓글의 상태를 토글
  };

  return (
    <div className={styles["comment"]}>
      <div>
        <strong className={styles["comment__user"]}>
          @user-{userId.split("-").at(-1)}
        </strong>
        <span className={styles["comment__created-at"]}>
          {getElapsedTime(createdAt)}
        </span>
        <p className={styles["comment__text"]}>{text}</p>
      </div>
      <FontAwesomeIcon
        icon={faEllipsisVertical}
        className={styles["comment__ellipsis"]}
        onClick={handleClickEllipsis}
      />
      <div
        className={styles["comment__button-list"]}
        style={{ display: isActive ? "flex" : "none" }}
      >
        <button type="button">신고</button>
        <button type="button" onClick={() => handleClickDelete(id)}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default Comment;
