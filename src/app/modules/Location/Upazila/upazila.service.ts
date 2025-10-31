import { prisma } from "../../../../shared/prismaClient";

const getAllUpazilaFromDb = async() => {
 const result = prisma.upazila.findMany();

 return result
}

export const UpazilaService = {
    getAllUpazilaFromDb
}