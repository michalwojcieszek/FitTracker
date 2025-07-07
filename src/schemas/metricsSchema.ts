import { z } from "zod";

export const metricsSchema = z.object({
  metricsDate: z.coerce
    .date({
      required_error: "Date is required",
      invalid_type_error: "Invalid date format",
    })
    .refine((val) => val <= new Date(), {
      message: "Date cannot be in the future",
    }),

  weight: z.coerce
    .number({
      required_error: "Weight is required",
      invalid_type_error: "Weight must be a number",
    })
    .positive("Weight must be a positive number"),

  chest: z.coerce
    .number({
      required_error: "Chest metrics is required",
      invalid_type_error: "Chest must be a number",
    })
    .positive("Chest must be a positive number"),

  waist: z.coerce
    .number({
      required_error: "Waist metrics is required",
      invalid_type_error: "Waist must be a number",
    })
    .positive("Waist must be a positive number"),

  hips: z.coerce
    .number({
      required_error: "Hips metrics is required",
      invalid_type_error: "Hips must be a number",
    })
    .positive("Hips must be a positive number"),

  shoulders: z.coerce
    .number({
      required_error: "Shoulders metrics is required",
      invalid_type_error: "Shoulders must be a number",
    })
    .positive("Shoulders must be a positive number"),

  biceps: z.coerce
    .number({
      required_error: "Biceps metrics is required",
      invalid_type_error: "Biceps must be a number",
    })
    .positive("Biceps must be a positive number"),

  forearms: z.coerce
    .number({
      required_error: "Forearms metrics is required",
      invalid_type_error: "Forearms must be a number",
    })
    .positive("Forearms must be a positive number"),

  thighs: z.coerce
    .number({
      required_error: "Thighs metrics is required",
      invalid_type_error: "Thighs must be a number",
    })
    .positive("Thighs must be a positive number"),

  calves: z.coerce
    .number({
      required_error: "Calves metrics is required",
      invalid_type_error: "Calves must be a number",
    })
    .positive("Calves must be a positive number"),
});

export type MetricsSchema = z.infer<typeof metricsSchema>;
