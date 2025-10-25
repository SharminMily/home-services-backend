import { prisma } from "../../../../shared/prismaClient";

const getDistictFromDb = async(id: string) => {
 const result = await prisma.district.findMany({
    where: {id},
 });

 return result
}

export const DistictService = {
    getDistictFromDb
}