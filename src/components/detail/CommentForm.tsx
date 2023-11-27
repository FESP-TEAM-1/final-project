import React, { useState, useRef, useEffect } from "react";
import styles from "styles/detail/CommentForm.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertCommentAPI } from "api/comment";
import useHandleResizeHeight from "hooks/useHandleResizeHeight";

interface CommentFormPropsType {
  videoId: string;
}

interface paramsType {
  videoId: string;
  commentInput: string;
}

const CommentForm: React.FC<CommentFormPropsType> = ({ videoId }) => {
  const [inputValue, setInputValue] = useState("");
  const [isBtnView, setIsBtnView] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const { ref, handleResizeHeight } = useHandleResizeHeight(inputValue);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (data: paramsType) => insertCommentAPI(data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["commentData"] }),
  });

  useEffect(() => {
    if (inputValue) setIsDisabled(false);
    else setIsDisabled(true);
  }, [inputValue]);

  const handleReset = () => {
    setInputValue("");
    setIsBtnView(false);
  };

  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    handleResizeHeight();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ videoId, commentInput: inputValue });
    handleReset();
  };

  return (
    <form className={styles["comment-form"]} onSubmit={handleSubmit}>
      <textarea
        ref={ref}
        className={styles["comment-form__textarea"]}
        value={inputValue}
        placeholder="댓글 추가 ..."
        onChange={handleChangeTextarea}
        onFocus={() => setIsBtnView(true)}
      ></textarea>
      {isBtnView && (
        <div className={styles["comment-form__buttons"]}>
          <input
            type="reset"
            value="취소"
            onClick={handleReset}
            className={styles["comment-form__buttons__reset"]}
          />
          <button
            type="submit"
            className={styles["comment-form__buttons__submit"]}
            disabled={isDisabled}
          >
            작성
          </button>
        </div>
      )}
    </form>
  );
};

export default CommentForm;
