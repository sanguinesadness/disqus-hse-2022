import { User } from "../types/user";

interface Tokens {
  access: string;
  refresh: string;
}

export interface UserTokens {
  tokens: Tokens;
  user: User;
}
