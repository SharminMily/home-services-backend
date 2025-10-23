import httpStatus from "http-status";
import AppError from "../../../shared/AppError";
import { TUser, TUserUpdate, userRequest } from "./user.interface";
import  bcrypt from "bcrypt"
import { Gender, UserRole, UserStatus } from "../../../../generated/prisma";
import { fileUploader } from "../../../helpers/fileUploder";
import { prisma } from "../../../shared/prismaClient";
import { generateAuthTokens } from "../../../helpers/tokenGenerator";

const createUser = async (req: userRequest) => {
  const file = req.file;
  if(file){
    const uploadToCloudinary = await fileUploader.uploadToCloudinary(file);
    req.body.photo = uploadToCloudinary?.secure_url
    //  console.log(req.body)
  }

  const hashPassword: string = await  bcrypt.hash(req.body.password, 12)
  // console.log(hashPassword)

  const existingUser = await prisma.user.findUnique({
    where: { email: req.body.email },
  });

  if (existingUser) {
    throw new AppError(httpStatus.CONFLICT, "Email already exists.");
  }

  const payload = req.body;
  
  const userData = {
    name: payload.name,
    email: payload.email,
    photo: payload.photo,
    password: hashPassword,
    phone: payload.phone,
    gender:  Gender[payload.gender as keyof typeof Gender] ?? null,
    address: payload.address, 
    role: UserRole.user,
    status: UserStatus.active,
  }

    const newUser = await prisma.user.create({ data: userData });

 const { accessToken, refreshToken } = generateAuthTokens(newUser);

  return {
    user: newUser,
    accessToken,
    refreshToken,
  };
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
  const existingCustomer = await prisma.user.findUniqueOrThrow({
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

//hard delete or soft delete
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