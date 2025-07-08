"use client";
import { Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

type CustomButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "text" | "contained" | "outlined";
} & ButtonProps;

const CustomButton = ({
  onClick,
  children,
  variant = "contained",
  ...props
}: CustomButtonProps) => {
  return (
    <Button
      type="submit"
      variant={variant}
      onClick={onClick}
      {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
