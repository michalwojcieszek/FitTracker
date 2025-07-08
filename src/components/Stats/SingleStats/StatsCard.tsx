"use client";
import { Card, CardContent, Divider } from "@mui/material";
import { MetricsSchema } from "@/schemas/metricsSchema";
import StatsCardHeader from "./StatsCardContent/StatsCardHeader";
import StatsCardBody from "./StatsCardContent/StatsCardBody";
import CustomCard from "@/components/UI/Cards/CustomCard";

const height = 175;
const id = "abc";

const StatsCard = ({ ...metrics }: MetricsSchema) => {
  const { metricsDate } = metrics;
  return (
    <CustomCard>
      <StatsCardHeader {...{ id, metricsDate }} />
      <Divider sx={{ my: 2 }} />
      <StatsCardBody {...{ metrics, height }} />
    </CustomCard>
  );
};

export default StatsCard;
