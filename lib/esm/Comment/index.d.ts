import BaseApi from "../Base";
import { CreateCommentDto } from "./dto/create.dto";
import { DeleteCommentDto } from "./dto/delete.dto";
declare class CommentApi extends BaseApi {
    constructor(websiteToken: string);
    getAll(): Promise<Comment[]>;
    create(dto: CreateCommentDto): Promise<Comment>;
    delete(dto: DeleteCommentDto): Promise<Comment>;
}
export default CommentApi;
