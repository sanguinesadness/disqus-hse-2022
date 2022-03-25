import axios, { AxiosInstance } from "axios";
import Cookies from "universal-cookie";
import {
  ACCESS_TOKEN_COOKIE,
  API_URL,
  USER_ROUTE,
  WEBSITE_TOKEN_COOKIE,
} from "./config";
import { UserTokens } from "./User/dto/userTokens.dto";

class BaseApi {
  protected _axios: AxiosInstance;
  protected _cookies: Cookies;

  constructor(websiteToken: string, routeName: string) {
    this._cookies = new Cookies();
    this._cookies.set(WEBSITE_TOKEN_COOKIE, websiteToken);

    this._axios = axios.create({
      baseURL: API_URL + routeName,
      withCredentials: true,
    });

    // set auth token on every request
    this._axios.interceptors.request.use((config) => {
      if (config.headers)
        config.headers.Authorization = `Bearer ${this._cookies.get(
          ACCESS_TOKEN_COOKIE
        )}`;

      return config;
    });

    // request new tokens on response error
    this._axios.interceptors.response.use(
      (config) => config,
      async (error) => {
        console.error(error.response.data);
        if (error.response.status == 401) {
          const resp = await axios.post<UserTokens>(
            API_URL + USER_ROUTE + "/refresh",
            null,
            { withCredentials: true }
          );
          this._cookies.set(ACCESS_TOKEN_COOKIE, resp.data.tokens.access);
          return this._axios.request(error.config);
        }
        return error;
      }
    );
  }
}

export default BaseApi;
