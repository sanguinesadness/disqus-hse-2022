import BaseApi from "../Base";
import { CreateDiscussionDto } from "./dto/create.dto";
import { Discussion } from "./types/discussion";
declare class DiscussionApi extends BaseApi {
    constructor(websiteToken: string);
    getAll(): Promise<Discussion[]>;
    create(dto: CreateDiscussionDto): Promise<Discussion>;
}
export default DiscussionApi;
