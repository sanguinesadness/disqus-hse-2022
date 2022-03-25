import { User } from "../types/user";

export type LoginUserDto = Pick<User, "email" | "password">;