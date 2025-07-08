"use client";
import { Card, CardContent, CardProps, Typography } from "@mui/material";
import { ReactNode } from "react";

type CustomCardProps = {
  children: ReactNode;
  title?: string;
  subtitle?: string;
} & CardProps;

const CustomCard = ({
  children,
  title,
  subtitle,
  ...props
}: CustomCardProps) => {
  return (
    <Card
      elevation={6}
      sx={{ borderRadius: 3, width: "100%", p: 3 }}
      {...props}>
      <CardContent>
        {title && (
          <Typography
            variant="h3"
            color="primary"
            fontWeight={700}
            pb={1}>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography
            pb={4}
            fontWeight={700}>
            {subtitle}
          </Typography>
        )}
        {children}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
