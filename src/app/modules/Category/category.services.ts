import { fileUploder } from "../../../helpers/fileUploder";
import AppError from "../../../shared/AppError";
import { prisma } from "../../../shared/prismaClient";
import { IFile } from "../../interfaces/file";
import { TCategory } from "./category.interface"
import httpStatus from "http-status";
import { Request } from "express";
// const createCategory = async (payload: TCategory) => {
//  console.log("Create Category")
//  const result = await prisma.categories.create({data: payload});
//    return result;
// }

const createCategory = async (req: Request) => {
  const file = req.file as Express.Multer.File;
  if (file) {
    const uploadToCloudinary = await fileUploder.uploadToCloudinary(file);
    req.body.image = uploadToCloudinary?.secure_url;
  }

  const categoryData: TCategory = {
    name: req.body.name,    
    image: req.body.image || null,
    popular: req.body.popular || null,
    featured: req.body.featured || null,
    latest: req.body.latest || null,
  };

  const result = await prisma.categories.create({
    data: categoryData,
  });

  return result;
};



const getAllCategory = async () => {
 const result = await prisma.categories.findMany();
   return result;
}


//get single id from database
const getByIdFromDB = async (id: string): Promise<TCategory | null> => {
  const result = await prisma.categories.findUnique({
    where: {
     id: id,
    },
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "CTEGORY not found");
  }
  return result;
};

const deleteByIdFromDB = async (id: string): Promise<TCategory | null> => {
  const result = await prisma.categories.findUnique({
    where: {
     id: id,
    },
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "CTEGORY not found");
  }
  return result;
};

export const CategoryServices = {
    createCategory,
    getAllCategory,
    getByIdFromDB,
    deleteByIdFromDB
}