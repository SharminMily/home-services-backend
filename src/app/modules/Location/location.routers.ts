

import express from "express";
import { PrismaClient } from "../../../../generated/prisma";


const LocationsRouter= express.Router();
const prisma = new PrismaClient();

// Get all divisions
LocationsRouter.get("/divisions", async (req, res) => {
  const divisions = await prisma.division.findMany({
    include: { districts: { include: { upazilas: true } } },
  });
  res.json(divisions);
});

export default LocationsRouter;
