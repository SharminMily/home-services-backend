import AppError from "../../../shared/AppError";
import { prisma } from "../../../shared/prismaClient";
import bcrypt from 'bcrypt';

const register =  async (payload: {
    email: string,
    password: string
}) => {
    const userData = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
    
  });

  if (!userData) {
    throw new AppError(404, 'User not found!');
  }
  if (userData.status.Blocked) {
    throw new AppError(403, 'User is blocked!');
  }

  const isCorrectPassword: boolean = await bcrypt.compare(
    payload.password,
    userData.password,
  );

  if (!isCorrectPassword) {
    throw new AppError(403, 'You have given a wrong password!');
  }


    console.log("register sucessfully")
}

export const AuthService = {
    register
}