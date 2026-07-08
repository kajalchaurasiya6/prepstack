import type { RegisterUserInput } from "./auth.validation.js";
import prisma from "../../config/prisma.js";
import bcrypt from "bcrypt";
import AppError from "../../utils/AppError.js";
export async function register({
    username,
    email,
    password,
}: RegisterUserInput) {
    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    const existingUsername = await prisma.user.findUnique({
        where: {
            username,
        },
    });
    if (existingUsername) {
        throw new AppError("Username already exists", 409);
    }
    if (existingUser) {
        throw new AppError("Email already exists", 409);
    }
    const passwordHash = await bcrypt.hash(password, 10);
   const user = await prisma.user.create({
        data: {
            username,
            email,
            passwordHash,
        }
    });
return user;
}






























