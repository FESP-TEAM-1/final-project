export interface AllCommentType {
  anonymous_user_id: string;
  created_at: string;
  id: number;
  text: string | null;
  video_id: string;
}

export interface CommentType {
  id: number;
  userId: string;
  createdAt: string;
  text: string | null;
}

export type SetActiveButtonIdType = (id: number | null) => void;
export type handleClickDeleteType = (id: number) => void;
export type handleClickInsertType = (
  videoId: string,
  commentInput: string
) => void;
