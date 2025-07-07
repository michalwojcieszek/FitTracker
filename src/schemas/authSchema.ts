import { z } from "zod";

export const authSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, "Password is required"),
});

export type AuthSchema = z.infer<typeof authSchema>;
