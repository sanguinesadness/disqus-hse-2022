import { Comment } from "../types/comment";

export type CreateCommentDto = Pick<Comment, "discussionId" | "text">;
