import { Request } from "express";
import { fileUploader } from "../../../helpers/fileUploder";
import { prisma } from "../../../shared/prismaClient";
import { IFile } from "../../interfaces/file";
import { serviceRequest } from "./service.interface";

const createService = async (req: Request) => {  
    const file = req.file as IFile;

    if (file) {
        const uploadToCloudinary = await fileUploader.uploadToCloudinary(file);
        req.body.image = uploadToCloudinary?.secure_url;
    }

    const result = await prisma.service.create({
        data: req.body
    });

    return result;
};



const allServiceFromDb = async() => { 
 const result = await prisma.service.findMany();

    return result;
};

const serviceIdFromDb= async(id: string) => { 
 const result = await prisma.service.findUnique({
  where: {
    id: id
  }
 });

    return result;
};


const deleteIdFromDb= async(id: string) => { 
 const result = await prisma.service.findUnique({
  where: {
    id: id
  }
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
    updateServiceFromDb
}