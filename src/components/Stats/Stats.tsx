"use client";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Divider,
  IconButton,
  Stack,
  Paper,
} from "@mui/material";
import { useMetricsStore } from "@/stores/metricsStore";
import StatsCard from "./SingleStats/StatsCard";

const Stats = () => {
  const { metrics } = useMetricsStore();
  const sampleMetrics = [
    {
      metricsDate: new Date("2025-07-01"),
      weight: 75.5,
      height: 1.78,
      chest: 102,
      waist: 82,
      hips: 98,
      shoulders: 115,
      biceps: 36,
      forearms: 30,
      thighs: 58,
      calves: 39,
    },
    {
      metricsDate: new Date("2025-06-20"),
      weight: 82.3,
      height: 1.82,
      chest: 108,
      waist: 86,
      hips: 101,
      shoulders: 120,
      biceps: 38,
      forearms: 32,
      thighs: 60,
      calves: 41,
    },
  ];

  return (
    <Grid
      container
      spacing={3}>
      {sampleMetrics.map((singleMetrics, index) => (
        <StatsCard
          {...singleMetrics}
          key={index}
        />
      ))}
    </Grid>
  );
};

export default Stats;
