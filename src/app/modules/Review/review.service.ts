import AppError from "../../../shared/AppError";
import { prisma } from "../../../shared/prismaClient";
import httpStatus from "http-status";

const createReview = async (payload: any) => {
 console.log("Create review")
 const result = await prisma.review.create({data: payload});
   return result;
}

const getAllReview = async () => {
 const result = await prisma.review.findMany();
   return result;
}

//get single id from database
const getByIdFromDB = async (id: string) => {
  const result = await prisma.review.findUnique({
    where: {
     id: id,
    },
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "CTEGORY not found");
  }
  return result;
};

//deleted from DB
const deleteByIdFromDB = async (id: string) => {
  const result = await prisma.review.findUnique({
    where: {
     id: id,
    },
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "review not found");
  }
  return result;
};

export const ReviewServices = {
    createReview,
    getAllReview,
    getByIdFromDB,
    deleteByIdFromDB
}