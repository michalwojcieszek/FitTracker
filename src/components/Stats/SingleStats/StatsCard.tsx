"use client";
import { Card, CardContent, Divider } from "@mui/material";
import { MetricsSchema } from "@/schemas/metricsSchema";
import StatsCardHeader from "./StatsCardContent/StatsCardHeader";
import StatsCardBody from "./StatsCardContent/StatsCardBody";

const height = 175;
const id = "abc";

const StatsCard = ({ ...metrics }: MetricsSchema) => {
  const { metricsDate } = metrics;
  return (
    <Card
      elevation={6}
      sx={{ borderRadius: 3, width: "100%" }}>
      <CardContent>
        <StatsCardHeader {...{ id, metricsDate }} />
        <Divider sx={{ my: 2 }} />
        <StatsCardBody {...{ metrics, height }} />
      </CardContent>
    </Card>
  );
};

export default StatsCard;
