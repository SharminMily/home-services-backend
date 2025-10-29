import { prisma } from "../../../../shared/prismaClient";

const getDistrictFromDb = async (divisionId: string) => {
  const result = await prisma.district.findMany({
    where: { divisionId },
    include: {
      upazilas: true, 
    },
  });
  return result;
};

export const DistrictService = {
  getDistrictFromDb,
};