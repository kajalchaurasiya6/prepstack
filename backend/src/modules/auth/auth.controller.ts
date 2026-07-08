import type { Request, Response, NextFunction } from "express";
import { register } from "./auth.service.js";
import { asyncHandler } from "../../utils/AsyncHandler.js";

export const registerController = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password } = req.body;
    await register({ username, email, password });
    return res
      .status(201)
      .json({ message: "User registered successfully", success: true });
  },
);
