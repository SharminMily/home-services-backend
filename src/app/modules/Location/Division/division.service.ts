import { prisma } from "../../../../shared/prismaClient"

const getDivisionFromDb = async() => {
 const result = prisma.division.findMany();

 return result
}

export const DivisionService = {
    getDivisionFromDb
}