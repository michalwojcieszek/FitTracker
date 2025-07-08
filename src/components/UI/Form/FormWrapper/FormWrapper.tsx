"use client";
import { Stack } from "@mui/material";
import { ReactNode } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";
import CustomButton from "../../Buttons/CustomButton";

type FormWrapperProps<T extends FieldValues> = {
  buttonText: string;
  methods: UseFormReturn<T>;
  onSubmit: (data: T) => void;
  children: ReactNode;
};

const FormWrapper = <T extends FieldValues>({
  buttonText,
  methods,
  onSubmit,
  children,
}: FormWrapperProps<T>) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          {children}
          <CustomButton type="submit">{buttonText}</CustomButton>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default FormWrapper;
