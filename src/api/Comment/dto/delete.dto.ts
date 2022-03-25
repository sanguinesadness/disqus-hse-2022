import { Comment } from "../types/comment";

export type DeleteCommentDto = Pick<Comment, "id">;
