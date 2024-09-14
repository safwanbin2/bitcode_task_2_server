import { Response } from "express";

const sendResponse = (
  res: Response,
  {
    statusCode,
    success,
    message,
    data,
  }: {
    statusCode: number;
    success: boolean;
    message: string;
    data: any | null;
  }
) => {
  res.status(statusCode || 200).json({
    success,
    message,
    data: data || null,
  });
};

export default sendResponse;
