"use client";
import { Grid } from "@mui/material";
import Weight from "./BodyContent/Weight";
import BmiStats from "./BodyContent/BmiStats";
import { MetricsSchema } from "@/schemas/metricsSchema";
import StatsDetails from "./BodyContent/StatsDetails";

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
      <StatsDetails {...{ metrics }} />
      <BmiStats {...{ height, weight }} />
    </Grid>
  );
};

export default StatsCardBody;
