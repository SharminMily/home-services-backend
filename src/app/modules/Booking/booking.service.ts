import { prisma } from "../../../shared/prismaClient";

const createBooking = async(payload: any) => {
//  console.log("create Booking")
 const result = await prisma.booking.create({
      data: payload
    });

    return result;
};


const getAllFromDb = async() => { 
 const result = await prisma.booking.findMany();

    return result;
};

const getIdFromDb= async(id: string) => { 
 const result = await prisma.booking.findUnique({
  where: {
    id: id
  }
 });

    return result;
};


const deleteIdFromDb= async(id: string) => { 
 const result = await prisma.booking.findUnique({
  where: {
    id: id
  }
 });

    return result;
};


const updateFromDb = async (id: string, payload: any) => {
  const result = await prisma.booking.update({
    where: {
      id: id,
    },
    data: {
      //
    }
  });

  return result;
};



export const BookingServices = {
    createBooking,
    getAllFromDb,
    getIdFromDb,
    deleteIdFromDb,
    updateFromDb
    
}