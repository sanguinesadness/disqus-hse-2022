import { AxiosInstance } from "axios";
import Cookies from "universal-cookie";
declare class BaseApi {
    protected _axios: AxiosInstance;
    protected _cookies: Cookies;
    constructor(websiteToken: string, routeName: string);
}
export default BaseApi;
