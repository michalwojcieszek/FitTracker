"use client";
import { formatDate } from "@/helpers/dateHelpers";
import { Stack, Typography } from "@mui/material";
import StatsButtons from "./BodyContent/StatsButtons";

type StatsCardHeaderProps = {
  metricsDate: Date;
  id: string;
};

const StatsCardHeader = ({ metricsDate, id }: StatsCardHeaderProps) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center">
      <Typography
        variant="h6"
        fontWeight={600}>
        Metrics from: {formatDate(metricsDate)}
      </Typography>
      <StatsButtons id={id} />
    </Stack>
  );
};

export default StatsCardHeader;
