import AppError from "../../../shared/AppError";
import { prisma } from "../../../shared/prismaClient";
import { IFile } from "../../interfaces/file";
import { CategoryRequest, TCategory } from "./category.interface";
import httpStatus from "http-status";
import { Request } from "express";
import { categoryValidation } from "./category.validation";
import { fileUploader } from "../../../helpers/fileUploder";
// const createCategory = async (payload: TCategory) => {
//  console.log("Create Category")
//  const result = await prisma.categories.create({data: payload});
//    return result;
// }
// const createCategory = async (req: any) => {
//   // Use req.body directly
//   const payload = req.body;

//   // Upload file if exists
//   const file: IFile | undefined = req.file;
//   if (file) {
//     const uploadToCloudinary = await fileUploader.uploadToCloudinary(file);
//     payload.image = uploadToCloudinary?.secure_url;
//   }

//   // Destructure safely
//   const { name, image, popular, featured, latest } = payload;

//   // Zod validation
//   categoryValidation.createCategory.parse({ name, image, popular, featured, latest });

//   // Prisma data
//   const categoryData: TCategory = {
//     name,
//     image: image || undefined,
//     popular: popular ?? null,
//     featured: featured ?? null,
//     latest: latest ?? null,
//   };

//   const result = await prisma.categories.create({
//     data: categoryData,
//   });

//   return result;
// };

const createCategory = async (req: CategoryRequest) => {
   const file = req.file;
  if (file) {
    const uploadToCloudinary = await fileUploader.uploadToCloudinary(file);
    req.body.image = uploadToCloudinary?.secure_url;
    console.log(req.body);
  }

  const payload = req.body;
  const userData = {
    name: payload.name,
    image: payload.image,
    popular: payload.popular,
    featured: payload.featured,
    latest: payload.latest,
  };

  const result = await prisma.categories.create({ data: userData });
  return result;
};

const getAllCategory = async () => {
  const result = await prisma.categories.findMany();
  return result;
};

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
  deleteByIdFromDB,
};
