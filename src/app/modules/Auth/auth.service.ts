
import { ref } from "node:process";
import { UserStatus } from "../../../../generated/prisma";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import AppError from "../../../shared/AppError";
import { prisma } from "../../../shared/prismaClient";
import bcrypt from 'bcrypt';
import config from "../../../config";
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
     config.jwt.jwt_secret as string,
     config.jwt.expires_in as string
     
);

const refreshToken = jwtHelpers.generateToken({
    email: userData.email,
    role:userData.role
  },
    config.jwt.refresh_token_secret as string,
    config.jwt.refresh_token_expires_in as string
);

return{
  accessToken,
  refreshToken
}
}

const refreshToken = async (token: string) => {
    let decodedData;
    try {
        decodedData = jwtHelpers.verifyToken(token, 'abcdefghgijklmnop');
    }
    catch (err) {
        throw new Error("You are not authorized!")
    }

    const userData = await prisma.user.findUniqueOrThrow({
        where: {
            email: decodedData.email,
            status: UserStatus.Active
        }
    });

    const accessToken = jwtHelpers.generateToken({
        email: userData.email,
        role: userData.role
    },
          config.jwt.jwt_secret as string,
        config.jwt.expires_in as string
    );

    return {
        accessToken,        
    };

}


export const AuthService = {
    loginUser,
    refreshToken
}