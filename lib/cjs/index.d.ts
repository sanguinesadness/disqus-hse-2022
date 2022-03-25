import CommentApi from "./Comment";
import DiscussionApi from "./Discussion";
import UserApi from "./User";
export default class Disqus {
    private _websiteToken;
    constructor(websiteToken: string);
    get discussion(): DiscussionApi;
    get user(): UserApi;
    get comment(): CommentApi;
}
