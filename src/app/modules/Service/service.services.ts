import { prisma } from "../../../shared/prismaClient";

const createService = async(payload: any) => {
 console.log("Create Service")
 const result = await prisma.service.create({
      data: {
      title: payload.title,
      description: payload.description,
      category_id: payload.category_id, 
      location_id: payload.location_id, 
      image: payload.image,
      price: payload.price,
      document: payload.document ?? null,
    },
    include: {
      category: true,  
      location: true,   
    },
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


export const ServiceServices = {
    createService,
    allServiceFromDb,
    serviceIdFromDb,
    deleteIdFromDb
}