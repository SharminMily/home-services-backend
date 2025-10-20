import { Request } from "express";
import { IFile } from "../../interfaces/file";

export type TUser = {
  id?: string;
  name: string;
  email: string;
  phone?: string | null;
  photo?: string | null;
  password: string;
  address: string; 
  gender: 'male' | 'female' | 'Other' | null;
  createdAt?: Date;
  updateAt?: Date;
};
export type TUserUpdate = {
  name: string ;
  phone?: string | null;
  photo?: string | null;  
  address: string;  
  createdAt?: Date;
  updateAt?: Date;
};


export type userRequest = Request<{}, {}, TUser> & { file?: IFile };
