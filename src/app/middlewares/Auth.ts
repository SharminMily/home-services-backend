import { NextFunction, Request, Response } from 'express';
import { UserRole } from "../../../generated/prisma";
import AppError from "../../shared/AppError";
import httpStatus from 'http-status';
import { jwtHelpers } from "../../helpers/jwtHelpers";
import config from "../../config";
import { Secret } from "jsonwebtoken";
import { prisma } from "../../shared/prismaClient";

export interface ITokenUser {
  email: string;
  role: UserRole;
  id: string;
  iat?: number;
  exp?: number;
}

const auth = (...roles: string[]) => {
  return async (
    req: Request & { user?: ITokenUser },
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
      }

      const verifiedUser = (await jwtHelpers.verifyToken(
        token as string,
        config.jwt.jwt_secret as Secret,
      )) as ITokenUser;

      if (verifiedUser.exp && Date.now() >= verifiedUser.exp * 1000) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'Token expired.');
      }

      const isUserExist = await prisma.user.findUnique({
        where: { id: verifiedUser.id },
      });

      if (!isUserExist) {
        throw new AppError(httpStatus.FORBIDDEN, 'User Not Found');
      }

      if (isUserExist.status === "blocked") {
        throw new AppError(httpStatus.FORBIDDEN, 'You are blocked!');
      }

      if (isUserExist.status === "deleted") {
        throw new AppError(httpStatus.FORBIDDEN, 'You are deleted!');
      }

      req.user = verifiedUser;

      if (roles.length && !roles.includes(verifiedUser.role)) {
        throw new AppError(httpStatus.FORBIDDEN, 'Forbidden!');
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default auth;