import React, { useState, useRef, useEffect } from "react";
import { handleClickInsertType } from "types/commentItem";
import styles from "styles/detail/CommentForm.module.css";

function useHandleResizeHeight(inputValue: string) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const handleResizeHeight = () => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  };

  useEffect(() => {
    if (inputValue) {
      handleResizeHeight();
    }
  }, [inputValue]);

  return { ref, handleResizeHeight };
}

interface CommentFormPropsType {
  videoId: string;
  handleClickInsert: handleClickInsertType;
}

const CommentForm: React.FC<CommentFormPropsType> = ({
  videoId,
  handleClickInsert,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isBtnView, setIsBtnView] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const { ref, handleResizeHeight } = useHandleResizeHeight(inputValue);

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
    handleClickInsert(videoId, inputValue);
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
