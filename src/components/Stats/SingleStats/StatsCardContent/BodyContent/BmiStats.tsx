"use client";
import { calculateBMI } from "@/helpers/calcBmi";
import { getHealthStatus } from "@/helpers/getHealthStatus";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";

type BmiStatsProps = {
  weight: number;
  height: number;
};

const BmiStats = ({ weight, height }: BmiStatsProps) => {
  const bmi = calculateBMI(weight, height);

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        borderRadius: 2,
        p: 2,
        height: "100%",
      }}>
      <Typography
        variant="subtitle2"
        color="text.secondary"
        gutterBottom>
        BMI & Health
      </Typography>
      <Typography
        variant="h5"
        fontWeight={700}
        color="secondary.main">
        BMI: {bmi}
      </Typography>
      <Typography
        variant="body1"
        fontWeight={600}>
        {getHealthStatus(bmi)}
      </Typography>
    </Box>
  );
};

export default BmiStats;
