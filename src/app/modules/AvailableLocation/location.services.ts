import { prisma } from "../../../shared/prismaClient";
import { TLocation } from "./location.interface";

const createLocation = async(payload: TLocation) => {
  const { service, service_provider, ...locationData } = payload; 
 const result = await prisma.availableLocation.create({
      data: locationData,
    });

    return result;
};


const getAllFromDb = async() => { 
 const result = await prisma.availableLocation.findMany();

    return result;
};

const getIdFromDb= async(id: string) => { 
 const result = await prisma.availableLocation.findUnique({
  where: {
    id: id
  }
 });

    return result;
};


const deleteIdFromDb= async(id: string) => { 
 const result = await prisma.availableLocation.findUnique({
  where: {
    id: id
  }
 });

    return result;
};


const updateFromDb = async (id: string, payload: any) => {
  const result = await prisma.availableLocation.update({
    where: {
      id: id,
    },
    data: {
      division: payload.division,
      district: payload.description,
      area: payload.area,
      lat: payload.lat,
      lon: payload.lon,
      address: payload.address,
    }
  });

  return result;
};



export const LocationServices = {
    createLocation,
    getAllFromDb,
    getIdFromDb,
    deleteIdFromDb,
    updateFromDb
    
}