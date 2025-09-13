import { z } from "zod";

export const userValidation = {
    createUser: z.object({
    name: z.string({ required_error: "name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.number({ required_error: "phone is required" }),
    password: z.string({ required_error: "password is required" }),
    adress: z.string({ required_error: "adress is required" }),
    gender: z.string().optional(),
    role: z.string().optional(),
  }),
};
