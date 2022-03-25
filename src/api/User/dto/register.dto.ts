import { User } from "../types/user";

export type RegisterUserDto = Pick<User, "email" | "password" | "name">;
