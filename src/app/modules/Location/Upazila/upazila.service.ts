import { prisma } from "../../../../shared/prismaClient";

const getAllUpazilaFromDb = async() => {
 const result = prisma.upazila.findMany();

 return result
}

const getUpazilaByDivisionAndDistrict = async (divisionId: string, districtId: string) => {
  const result = await prisma.upazila.findMany({
    where: {
     district: {
      divisionId: divisionId,
      id: districtId,
    },
    },
  });

  return result;
};


export const UpazilaService = {
    getAllUpazilaFromDb,
    getUpazilaByDivisionAndDistrict
}