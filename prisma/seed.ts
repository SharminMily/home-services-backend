import fs from "fs";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  //  Step 1: JSON file read
  const divisions = JSON.parse(fs.readFileSync("prisma/data/divisions.json", "utf-8"));
  const districts = JSON.parse(fs.readFileSync("prisma/data/districts.json", "utf-8"));
  const upazilas = JSON.parse(fs.readFileSync("prisma/data/upazilas.json", "utf-8"));

  //  Step 2: Create data
  await prisma.division.createMany({ data: divisions });
  await prisma.district.createMany({ data: districts });
  await prisma.upazila.createMany({ data: upazilas });

  //  Step 3: Success message (এখানেই console.log থাকবে)
  console.log(" Seeding completed!");
}

//  Step 4: Run the main() safely
main()
  .catch((e) => {
    console.error("Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
