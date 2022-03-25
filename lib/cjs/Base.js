"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var universal_cookie_1 = __importDefault(require("universal-cookie"));
var config_1 = require("./config");
var BaseApi = /** @class */ (function () {
    function BaseApi(websiteToken, routeName) {
        var _this = this;
        this._cookies = new universal_cookie_1.default();
        this._cookies.set(config_1.WEBSITE_TOKEN_COOKIE, websiteToken);
        this._axios = axios_1.default.create({
            baseURL: config_1.API_URL + routeName,
            withCredentials: true,
        });
        // set auth token on every request
        this._axios.interceptors.request.use(function (config) {
            if (config.headers)
                config.headers.Authorization = "Bearer ".concat(_this._cookies.get(config_1.ACCESS_TOKEN_COOKIE));
            return config;
        });
        // request new tokens on response error
        this._axios.interceptors.response.use(function (config) { return config; }, function (error) { return __awaiter(_this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.error(error.response.data);
                        if (!(error.response.status == 401)) return [3 /*break*/, 2];
                        return [4 /*yield*/, axios_1.default.post(config_1.API_URL + config_1.USER_ROUTE + "/refresh", null, { withCredentials: true })];
                    case 1:
                        resp = _a.sent();
                        this._cookies.set(config_1.ACCESS_TOKEN_COOKIE, resp.data.tokens.access);
                        return [2 /*return*/, this._axios.request(error.config)];
                    case 2: return [2 /*return*/, error];
                }
            });
        }); });
    }
    return BaseApi;
}());
exports.default = BaseApi;
