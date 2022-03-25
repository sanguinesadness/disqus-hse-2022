import CommentApi from "./Comment";
import DiscussionApi from "./Discussion";
import UserApi from "./User";
var Disqus = /** @class */ (function () {
    function Disqus(websiteToken) {
        this._websiteToken = "";
        this._websiteToken = websiteToken;
    }
    Object.defineProperty(Disqus.prototype, "discussion", {
        get: function () {
            return new DiscussionApi(this._websiteToken);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Disqus.prototype, "user", {
        get: function () {
            return new UserApi(this._websiteToken);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Disqus.prototype, "comment", {
        get: function () {
            return new CommentApi(this._websiteToken);
        },
        enumerable: false,
        configurable: true
    });
    return Disqus;
}());
export default Disqus;
