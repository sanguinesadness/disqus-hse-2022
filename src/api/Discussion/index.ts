import BaseApi from "../Base";
import { DISCUSSION_ROUTE } from "../config";
import { CreateDiscussionDto } from "./dto/create.dto";
import { Discussion } from "./types/discussion";

class DiscussionApi extends BaseApi {
  constructor(websiteToken: string) {
    super(websiteToken, DISCUSSION_ROUTE);
  }

  public async getAll(): Promise<Discussion[]> {
    const resp = await this._axios.get<Discussion[]>("/");
    return resp.data;
  }

  public async create(dto: CreateDiscussionDto): Promise<Discussion> {
    const resp = await this._axios.post<Discussion>("/", dto);
    return resp.data;
  }
}

export default DiscussionApi;
