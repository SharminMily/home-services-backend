
import { prisma } from "../../../shared/prismaClient";

const createServiceProvider = async(payload: any) => {
//  console.log("Create Service")
 const result = await prisma.serviceProvider.create({
      data: payload
    });

    return result;
};


const getAllFromDb = async() => { 
 const result = await prisma.serviceProvider.findMany();

    return result;
};

const getIdFromDb= async(id: string) => { 
 const result = await prisma.serviceProvider.findUnique({
  where: {
    id: id
  }
 });

    return result;
};


const deleteIdFromDb= async(id: string) => { 
 const result = await prisma.serviceProvider.findUnique({
  where: {
    id: id
  }
 });

    return result;
};


const updateFromDb = async (id: string, payload: any) => {
  const result = await prisma.serviceProvider.update({
    where: {
      id: id,
    },
    data: {
    //  
    }
  });

  return result;
};



export const serviceProviderServices = {
    createServiceProvider,
    getAllFromDb,
    getIdFromDb,
    deleteIdFromDb,
    updateFromDb
    
}