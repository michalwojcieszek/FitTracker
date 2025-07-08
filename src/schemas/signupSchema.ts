import { z } from "zod";

export const signupSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  name: z.string().min(1, "Name is required"),
  height: z.coerce
    .number({
      required_error: "Height is required",
      invalid_type_error: "Height must be a number",
    })
    .positive("Height must be a positive number"),
  password: z.string().min(1, "Password is required"),
});

export type SignupSchema = z.infer<typeof signupSchema>;
