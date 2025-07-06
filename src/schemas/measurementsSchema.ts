import { z } from "zod";

export const measurementsSchema = z.object({
  firstName: z.string().nonempty("Name is required"),
  age: z.coerce
    .number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    })
    .min(1, "Age must be at least 1"),
  measurementDate: z
    .date({ required_error: "Date is required" })
    .refine((val) => val <= new Date(), {
      message: "Date cannot be in the future",
    }),
});

export type MeasurementsSchema = z.infer<typeof measurementsSchema>;
