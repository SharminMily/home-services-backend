// src/types/service.type.ts

import { Request } from "express";
import { IFile } from "../../interfaces/file";

export type TService = {
  id?: string;
  title: string;
  description: string;
  category_id: string;
  image: string;
  price: number;
  document?: string;
  location_id: string;
  createdAt?: Date;
  service_provider?: any[];
  booking?: any[];
  reviews?: any[];
};

export type serviceRequest = Request<{}, {}, TService> & { file?: IFile };
