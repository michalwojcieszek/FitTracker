import { z } from "zod";

export const profileUpdateSchema = z.object({
  name: z.string().min(1, "Name is required"),
  height: z.coerce
    .number({
      required_error: "Height is required",
      invalid_type_error: "Height must be a number",
    })
    .positive("Height must be a positive number"),
});

export type ProfileUpdateSchema = z.infer<typeof profileUpdateSchema>;
