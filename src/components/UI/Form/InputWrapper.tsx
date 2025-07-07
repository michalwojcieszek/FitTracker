"use client";
import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";

type InputWrapperProps = {
  label: string;
  name: string;
  errors: FieldErrors<FieldValues>;
  children: ReactNode;
};

const InputWrapper = ({ label, name, errors, children }: InputWrapperProps) => {
  return (
    <Stack gap={1}>
      <Typography>{label}</Typography>
      {!!errors[name] && (
        <Typography
          fontSize={12}
          color="red">
          {errors[name].message?.toString()}
        </Typography>
      )}
      {children}
    </Stack>
  );
};

export default InputWrapper;
