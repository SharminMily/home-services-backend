import AppError from "../../../shared/AppError";
import { prisma } from "../../../shared/prismaClient";
import { TCategory } from "./category.interface"
import httpStatus from "http-status";

const createCategory = async (payload: TCategory) => {
 console.log("Create Category")
 const result = await prisma.categories.create({data: payload});
   return result;
}

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