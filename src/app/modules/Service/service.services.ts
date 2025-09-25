import { Request } from "express";
import { fileUploader } from "../../../helpers/fileUploder";
import { prisma } from "../../../shared/prismaClient";
import { IFile } from "../../interfaces/file";
import { serviceRequest } from "./service.interface";
import { IPaginationOptions, paginationHelper } from "../../../helpers/paginationHelper";
import { Prisma } from "@prisma/client";
import { serviceSearchableFields } from "./service.constants";

const createService = async (req: Request) => {
  const file = req.file as IFile;

  if (file) {
    const uploadToCloudinary = await fileUploader.uploadToCloudinary(file);
    req.body.image = uploadToCloudinary?.secure_url;
  }

  const result = await prisma.service.create({
    data: req.body,
    include: {
      category: true,
      location: true,
    },
  });

  return result;
};


const allServiceFromDb = async (
  filters: any,
  options: IPaginationOptions
) => {
  const { limit, page, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;
   
  const andConditions: Prisma.ServiceWhereInput[] = [];
   if (searchTerm) {
  andConditions.push({
    OR: [
      { title: { contains: searchTerm, mode: 'insensitive' } },
      { description: { contains: searchTerm, mode: 'insensitive' } },
      {
        category: {
          is: { name: { contains: searchTerm, mode: 'insensitive' } },
        },
      },
      {
        location: {
          is: { address: { contains: searchTerm, mode: 'insensitive' } },
        },
      },
    ],
  });
}

  if (Object.keys(filterData).length > 0) {
    const filterConditions = Object.keys(filterData).map((key) => {
      return { [key]: { equals: (filterData as any)[key] } };
    });
    andConditions.push(...filterConditions);
  }


  // andConditions.push({ isDeleted: false });

  const whereConditions: Prisma.ServiceWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.service.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : { createdAt: 'desc' },
    include: {
      category: { select: { id: true, name: true } },
      location: { select: { id: true, address: true } },
    },
  });

  const total = await prisma.service.count({
    where: whereConditions,
  });

  return {
    meta: { total, page, limit },
    data: result,    
  };
};





const serviceIdFromDb = async (id: string) => {
  const result = await prisma.service.findUnique({
    where: {
      id: id,      
    },
    include: {
      category: true,
      location: true,}
  });

  return result;
};

const deleteIdFromDb = async (id: string) => {
  const result = await prisma.service.findUnique({
    where: {
      id: id,
    },
  });

  return result;
};

const updateServiceFromDb = async (id: string, payload: any) => {
  const result = await prisma.service.update({
    where: {
      id: id,
    },
    data: {
      title: payload.title,
      description: payload.description,
      category_id: payload.category_id,
      location_id: payload.location_id,
      image: payload.image,
      price: payload.price,
      document: payload.document ?? null,
    },
    // include: {
    //   category: {
    //     select: {
    //       id: true,
    //       title: true,
    //     },
    //   },
    //   location: {
    //     select: {
    //       area: true,
    //     },
    //   },
    // },
  });

  return result;
};

export const ServiceServices = {
  createService,
  allServiceFromDb,
  serviceIdFromDb,
  deleteIdFromDb,
  updateServiceFromDb,
};
