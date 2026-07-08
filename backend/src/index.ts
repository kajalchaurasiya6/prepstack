import express from "express";
import { errorHandler } from "./middleware/errorHandler.js";
import dotenv from "dotenv";
import moduleRoutes from "./modules/index.js";
import cors from "cors";
dotenv.config();
export const app = express();
app.use(express.json());
app.use(
    cors({
        origin: process.env.FRONTEND_URL || "http://localhost:5173",
        credentials: true,
    })
);
app.use("/api", moduleRoutes);
app.use(errorHandler);