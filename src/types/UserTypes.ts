import { Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

export interface SignupFormData {
  username: string;
  email: string;
  password: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}
