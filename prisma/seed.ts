
import fs from "fs";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const divisions = JSON.parse(fs.readFileSync("prisma/data/divisions.json", "utf-8"));
  const districts = JSON.parse(fs.readFileSync("prisma/data/districts.json", "utf-8"));
  const upazilas = JSON.parse(fs.readFileSync("prisma/data/upazilas.json", "utf-8"));

  await prisma.division.createMany({ data: divisions });
  await prisma.district.createMany({ data: districts });
  await prisma.upazila.createMany({ data: upazilas });

  console.log("✅ Seeding completed!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
