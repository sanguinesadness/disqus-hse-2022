export interface Comment {
  id: string;
  userId: string;
  discussionId: string;
  text: string;
  likes: number | null;
  dislikes: number | null;
}
