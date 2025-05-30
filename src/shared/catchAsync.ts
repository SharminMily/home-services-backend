import { NextFunction, Request, RequestHandler, Response } from "express";

export const catchAsynce = (fn: RequestHandler) => {
 return async (req: Request, res: Response, next: NextFunction) => {
  try {
    await fn(req, res, next)
  } catch (err) {
    next(err);
  }
 }
}