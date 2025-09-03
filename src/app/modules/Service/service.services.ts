
import { prisma } from "../../../shared/prismaClient";
const createService = async(payload: any) => {
 console.log("Create Service")
 const result = await prisma.service.create({
        data: payload
    });

    return result;
};
export const ServiceServices = {
    createService
}