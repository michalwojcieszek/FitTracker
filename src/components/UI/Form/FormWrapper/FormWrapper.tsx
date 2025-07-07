"use client";
import { Button, Stack } from "@mui/material";
import { ReactNode } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";

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
          <Button
            type="submit"
            variant="contained"
            sx={{ color: "white", textTransform: "none" }}>
            {buttonText}
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default FormWrapper;
