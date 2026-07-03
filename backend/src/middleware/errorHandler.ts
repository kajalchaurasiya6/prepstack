import type { NextFunction,Request,Response } from "express";
import AppError  from "../utils/AppError.js";

function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction): void {
   let statusCode = 500;
let message = "Internal Server Error";

if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
}

res.status(statusCode).json({
    success: false,
    message
});
}

export { errorHandler };