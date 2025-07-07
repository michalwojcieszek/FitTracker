"use client";

import { Grid } from "@mui/material";
import Weight from "./BodyContent/Weight";
import StatsList from "./BodyContent/StatsList";
import BmiStats from "./BodyContent/BmiStats";
import { MetricsSchema } from "@/schemas/metricsSchema";

type StatsCardBodyProps = {
  metrics: MetricsSchema;
  height: number;
};

const StatsCardBody = ({ metrics, height }: StatsCardBodyProps) => {
  const { weight } = metrics;

  return (
    <Grid
      container
      spacing={2}>
      <Weight {...{ weight }} />
      <StatsList {...{ metrics }} />
      <BmiStats {...{ height, weight }} />
    </Grid>
  );
};

export default StatsCardBody;
