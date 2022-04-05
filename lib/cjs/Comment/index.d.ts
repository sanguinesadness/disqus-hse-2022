import BaseApi from "../Base";
import { CreateCommentDto } from "./dto/create.dto";
import { DeleteCommentDto } from "./dto/delete.dto";
import { Comment } from "./types/comment";
declare class CommentApi extends BaseApi {
    constructor(websiteToken: string);
    getAll(): Promise<Comment[]>;
    like(commentId: string): Promise<number>;
    dislike(commentId: string): Promise<number>;
    create(dto: CreateCommentDto): Promise<Comment>;
    delete(dto: DeleteCommentDto): Promise<Comment>;
}
export default CommentApi;
