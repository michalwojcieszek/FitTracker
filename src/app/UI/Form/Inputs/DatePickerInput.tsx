"use client";

import { Controller, useFormContext } from "react-hook-form";
import {
  DatePicker,
  DatePickerProps,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import InputWrapper from "../InputWrapper";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

type DatePickerInputProps = {
  name: string;
  label: string;
} & DatePickerProps;

const DatePickerInput = ({ name, label, ...props }: DatePickerInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <InputWrapper
      label={label}
      name={name}
      errors={errors}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <DatePicker
              format="dd/MM/yyyy"
              maxDate={new Date()}
              {...field}
              {...props}
            />
          )}
        />
      </LocalizationProvider>
    </InputWrapper>
  );
};

export default DatePickerInput;
