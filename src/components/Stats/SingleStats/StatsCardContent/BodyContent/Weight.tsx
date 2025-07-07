"use client";

import { Box, Typography } from "@mui/material";

type WeightProps = {
  weight: number;
};

const Weight = ({ weight }: WeightProps) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="subtitle2"
        color="text.secondary">
        Weight
      </Typography>
      <Typography
        variant="h4"
        fontWeight={700}
        color="primary.main">
        {weight} kg (0)
      </Typography>
    </Box>
  );
};

export default Weight;
