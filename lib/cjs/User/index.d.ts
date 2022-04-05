import BaseApi from "../Base";
import { LoginUserDto } from "./dto/login.dto";
import { RegisterUserDto } from "./dto/register.dto";
import { UserTokens } from "./dto/userTokens.dto";
import { User } from "./types/user";
declare class UserApi extends BaseApi {
    constructor(websiteToken: string);
    private setAccessTokenCookie;
    private removeAccessTokenCookie;
    getAll(): Promise<User[]>;
    register(dto: RegisterUserDto): Promise<UserTokens>;
    login(dto: LoginUserDto): Promise<UserTokens>;
    getCurrent(): Promise<User>;
    logout(): Promise<void>;
    refresh(): Promise<UserTokens>;
}
export default UserApi;
