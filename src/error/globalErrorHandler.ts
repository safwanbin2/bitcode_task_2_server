import { NextFunction, Request, Response } from "express";

const globalErrorHandler = async (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(error?.statusCode || 500).json({
    success: false,
    message: error?.message || "Something went wrong!",
    error,
  });
};

export default globalErrorHandler;
