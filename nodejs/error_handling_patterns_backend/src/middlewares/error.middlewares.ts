import type { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError.ts";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log({ err });
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Soemthing went wrong",
  });
};
