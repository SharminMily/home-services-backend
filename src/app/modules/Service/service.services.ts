
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
export const ServiceServices = {
    createService
}