import BaseApi from "../Base";
import { ACCESS_TOKEN_COOKIE, USER_ROUTE } from "../config";
import { LoginUserDto } from "./dto/login.dto";
import { RegisterUserDto } from "./dto/register.dto";
import { UserTokens } from "./dto/userTokens.dto";
import { User } from "./types/user";

class UserApi extends BaseApi {
  constructor(websiteToken: string) {
    super(websiteToken, USER_ROUTE);
  }

  private setAccessTokenCookie(token: string) {
    this._cookies.set(ACCESS_TOKEN_COOKIE, token);
  }

  private removeAccessTokenCookie() {
    this._cookies.remove(ACCESS_TOKEN_COOKIE);
  }

  public async getAll(): Promise<User[]> {
    const resp = await this._axios.get<User[]>("");
    return resp.data;
  }

  public async register(dto: RegisterUserDto): Promise<UserTokens> {
    const resp = await this._axios.post<UserTokens>("/register", dto);
    this.setAccessTokenCookie(resp.data.tokens.access);
    return resp.data;
  }

  public async login(dto: LoginUserDto): Promise<UserTokens> {
    const resp = await this._axios.post<UserTokens>("/login", dto);
    this.setAccessTokenCookie(resp.data.tokens.access);
    return resp.data;
  }

  public async getCurrent(): Promise<User> {
    const resp = await this._axios.get<User>("/current");
    return resp.data;
  }

  public async logout(): Promise<void> {
    this.removeAccessTokenCookie();
    return await this._axios.post("/logout");
  }

  public async refresh(): Promise<UserTokens> {
    const resp = await this._axios.post<UserTokens>("/refresh");
    this.setAccessTokenCookie(resp.data.tokens.access);
    return resp.data;
  }
}

export default UserApi;
