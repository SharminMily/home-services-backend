import { Request } from "express";
import { IFile } from "../../interfaces/file";

export type TCategory = {
  id?: string;
  name: string;
 image?: string | null;
  popular: boolean | null;
  featured: boolean | null;
  latest: boolean | null;
//   service: Service[];
  createdAt?: Date;
  updateAt?: Date;
};

export type TCategoryUpdate = {
  name: string;
  image?: string | null;
  popular: boolean | null;
  featured: boolean | null;
  latest: boolean | null;
  createdAt?: Date;
  updateAt?: Date;
};

export type CategoryRequest = Request<{}, {}, TCategory> & { file?: IFile };
