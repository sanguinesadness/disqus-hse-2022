"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Comment_1 = __importDefault(require("./Comment"));
var Discussion_1 = __importDefault(require("./Discussion"));
var User_1 = __importDefault(require("./User"));
var Disqus = /** @class */ (function () {
    function Disqus(websiteToken) {
        this._websiteToken = "";
        this._websiteToken = websiteToken;
    }
    Object.defineProperty(Disqus.prototype, "discussion", {
        get: function () {
            return new Discussion_1.default(this._websiteToken);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Disqus.prototype, "user", {
        get: function () {
            return new User_1.default(this._websiteToken);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Disqus.prototype, "comment", {
        get: function () {
            return new Comment_1.default(this._websiteToken);
        },
        enumerable: false,
        configurable: true
    });
    return Disqus;
}());
exports.default = Disqus;
