
import { UserStatus } from "../../../../generated/prisma";
import AppError from "../../../shared/AppError";
import { prisma } from "../../../shared/prismaClient";
import bcrypt from 'bcrypt';

const loginUser =  async (payload: {
    email: string,
    password: string
}) => {
    const userData = await prisma.user.findUnique({
    where: {
      email: payload.email,
      status: UserStatus.Active
    },    
  });

  if (!userData) {
    throw new AppError(404, 'User not found!');
  } 

  const isCorrectPassword: boolean = await bcrypt.compare(
    payload.password,
    userData.password,
  );

  if (!isCorrectPassword) {
    throw new AppError(403, 'You have given a wrong password!');
  }
}

export const AuthService = {
    loginUser
}