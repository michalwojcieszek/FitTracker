"use client";
import { Card, CardContent, Typography } from "@mui/material";
import { ReactNode } from "react";

interface CustomCardProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const CustomCard = ({ children, title, subtitle }: CustomCardProps) => {
  return (
    <Card
      sx={{ padding: 5, borderRadius: 3 }}
      elevation={6}>
      <CardContent>
        <Typography
          variant="h3"
          color="primary"
          fontWeight={700}
          pb={1}>
          {title}
        </Typography>
        <Typography
          pb={4}
          fontWeight={700}>
          {subtitle}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
