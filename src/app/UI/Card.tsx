"use client";
import { Card as MantineCard, Typography } from "@mui/material";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const Card = ({ children, title, subtitle }: CardProps) => {
  return (
    <MantineCard sx={{ padding: 5, borderRadius: 2 }}>
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
    </MantineCard>
  );
};

export default Card;
