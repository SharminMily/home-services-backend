
import { ref } from "node:process";
import { UserStatus } from "../../../../generated/prisma";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import AppError from "../../../shared/AppError";
import { prisma } from "../../../shared/prismaClient";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken" 
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

  const accessToken = jwtHelpers.generateToken({
    email: userData.email,
    role:userData.role
  },
"abcdefghijkl",
"15m"

);

const refreshToken = jwtHelpers.generateToken({
    email: userData.email,
    role:userData.role
  },
"abcdefghijkl78999",
"1d"

);


return{
  accessToken,
  refreshToken
}
}

const refreshToken = async(token: string) => {
  const decodeData = jwt.verify(token, "abcdefghijkl78999")
  console.log(decodeData )
}


export const AuthService = {
    loginUser,
    refreshToken
}