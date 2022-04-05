import { User } from "../../User/types/user";

export interface Comment {
  id: string;
  userId: string;
  discussionId: string;
  text: string;
  likes: number | null;
  dislikes: number | null;
  user?: User;
}
