"use client";
import { TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import InputWrapper from "../InputWrapper";

type TextInputProps = {
  name: string;
  label: string;
  placeholder: string;
} & TextFieldProps;

const TextInput = ({ name, label, placeholder, ...props }: TextInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <InputWrapper
      label={label}
      name={name}
      errors={errors}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            id="outlined-basic"
            label={placeholder}
            variant="outlined"
            error={!!errors[name]}
            {...field}
            {...props}
          />
        )}
      />
    </InputWrapper>
  );
};

export default TextInput;
