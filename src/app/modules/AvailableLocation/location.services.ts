
import { prisma } from "../../../shared/prismaClient";
const createLocation = async(payload: any) => {
 console.log("Create Service")
 const result = await prisma.availableLocation.create({
      data: payload
    });

    return result;
};
export const LocationServices = {
    createLocation
}