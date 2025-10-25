import { prisma } from "../../../../shared/prismaClient"

const getDivisionFromDb = async() => {
 const result = prisma.district.findMany();

 return result
}

export const DivisionService = {
    getDivisionFromDb
}