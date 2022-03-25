import CommentApi from "./Comment";
import DiscussionApi from "./Discussion";
import UserApi from "./User";

export default class Disqus {
  private _websiteToken = "";

  constructor(websiteToken: string) {
    this._websiteToken = websiteToken;
  }

  public get discussion() {
    return new DiscussionApi(this._websiteToken);
  }

  public get user() {
    return new UserApi(this._websiteToken);
  }

  public get comment() {
    return new CommentApi(this._websiteToken);
  }
}
