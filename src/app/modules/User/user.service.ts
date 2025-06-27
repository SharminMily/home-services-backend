import httpStatus from "http-status";
import AppError from "../../../shared/AppError";
import { prisma } from "../../../shared/prismaClient";
import { TUser, TUserUpdate } from "./user.interface";

import  bcrypt from "bcrypt"
const createUser = async (payload: TUser): Promise<TUser> => {

  const hashPassword: string = await  bcrypt.hash(payload.password, 12)
  console.log(hashPassword)

  const existingUser = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  if (existingUser) {
    throw new AppError(httpStatus.CONFLICT, "Email already exists.");
  }
  const userData = {
    name: payload.name,
    email: payload.email,
    phone: payload.phone,    
    password: hashPassword,
    adress: payload.adress,
    photo: payload.photo    
  };
  const result = await prisma.user.create({ data: userData });
  return result;
};

//get all Users from database
const getAllUserFromDB = async () => {
  const result = await prisma.user.findMany();
  return result;
};

//get single  User from database
const getByIdFromDB = async (id: string): Promise<TUser | null> => {
  const result = await prisma.user.findUnique({
    where: {
     id: id,
    },
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }
  return result;
};

//Update from Database
const updateIntoDB = async (
  id: string,
  data: TUserUpdate
): Promise<TUserUpdate> => {
  const existingCustomer = await prisma.user.findUnique({
    where: { id },
  });

  if (!existingCustomer) {
    throw new AppError(httpStatus.NOT_FOUND, "Customer not found");
  }
  const result = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name: data.name,
      phone: data.phone,     
    },
  });

  const { email, ...rest } = result;
  return rest as TUserUpdate;
};

//delete customer from database
const deleteFromDB = async (id: string): Promise<TUser | null> => {
  if (!id) {
    throw new AppError(httpStatus.BAD_REQUEST, "Customer ID is required");
  }

  const customerExists = await prisma.user.findUnique({
    where: { id},
  });

  if (!customerExists) {
    throw new AppError(httpStatus.NOT_FOUND, "Customer not found");
  }
  const result = await prisma.user.delete({
    where: { id },
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Customer not found");
  }

  return result;
};


export const UserServices = {
  createUser,
  getAllUserFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB  
};