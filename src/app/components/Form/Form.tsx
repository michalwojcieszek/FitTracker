"use client";
import Card from "@/app/UI/Card";
import { Button, Stack } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import TextInput from "@/app/UI/Form/Inputs/TextInput";
import DatePickerInput from "@/app/UI/Form/Inputs/DatePickerInput";
import {
  measurementsSchema,
  MeasurementsSchema,
} from "@/schemas/measurementsSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = () => {
  const methods = useForm<MeasurementsSchema>({
    resolver: zodResolver(measurementsSchema),
    defaultValues: { measurementDate: new Date() },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Card
      title="Add your data"
      subtitle="share your performace">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <TextInput
              name="firstName"
              label="Name"
              placeholder="enter your name"
            />
            <TextInput
              name="age"
              label="Age"
              placeholder="enter your age"
              type="number"
            />
            <DatePickerInput
              name="measurementDate"
              label="Date of measurements"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ color: "white", textTransform: "none" }}>
              Send
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </Card>
  );
};

export default Form;
