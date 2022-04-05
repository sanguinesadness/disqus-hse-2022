import BaseApi from "../Base";
import { COMMENT_ROUTE } from "../config";
import { CreateCommentDto } from "./dto/create.dto";
import { DeleteCommentDto } from "./dto/delete.dto";
import { Comment } from "./types/comment";

class CommentApi extends BaseApi {
  constructor(websiteToken: string) {
    super(websiteToken, COMMENT_ROUTE);
  }

  public async getAll(): Promise<Comment[]> {
    const resp = await this._axios.get<Comment[]>("");
    return resp.data;
  }

  public async like(commentId: string): Promise<number> {
    const resp = await this._axios.post<number>("/like", { commentId });
    return resp.data;
  }

  public async dislike(commentId: string): Promise<number> {
    const resp = await this._axios.post<number>("/dislike", { commentId });
    return resp.data;
  }

  public async create(dto: CreateCommentDto): Promise<Comment> {
    const resp = await this._axios.post<Comment>("", dto);
    return resp.data;
  }

  public async delete(dto: DeleteCommentDto): Promise<Comment> {
    const resp = await this._axios.delete<Comment>("", { data: dto });
    return resp.data;
  }
}

export default CommentApi;
