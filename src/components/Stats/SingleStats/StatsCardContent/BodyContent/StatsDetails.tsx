"use client";
import { formatKey } from "@/helpers/stringHelpers";
import { MetricsSchema } from "@/schemas/metricsSchema";
import StraightenIcon from "@mui/icons-material/Straighten";
import { Grid, Paper, Typography } from "@mui/material";

type StatsDetailsProps = {
  metrics: MetricsSchema;
};

const StatsDetails = ({ metrics }: StatsDetailsProps) => {
  return (
    <Grid
      container
      spacing={2}>
      {Object.entries(metrics).map(([key, value], index) => {
        return (
          <Paper
            elevation={2}
            sx={{
              p: 1.5,
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              borderRadius: 2,
            }}
            key={index}>
            {<StraightenIcon color="primary" />}
            <Typography
              variant="body2"
              fontWeight={500}>
              {formatKey(key)}:
            </Typography>
            <Typography
              variant="body2"
              fontWeight={600}
              color="text.primary">
              {value.toString()} (0)
            </Typography>
          </Paper>
        );
      })}
    </Grid>
  );
};

export default StatsDetails;
