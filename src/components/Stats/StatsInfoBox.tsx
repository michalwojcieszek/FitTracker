"use client";

import { Stack, Typography } from "@mui/material";
import CustomCard from "../UI/Cards/CustomCard";
import NewMetrics from "../NewMetrics/NewMetrics";

const StatsInfoBox = () => {
  return (
    <CustomCard>
      <Stack gap={2}>
        <Typography
          variant="h4"
          component="h4">
          Hello,{" "}
          <span style={{ color: "primary.main", fontWeight: "bold" }}>
            Michał
          </span>
        </Typography>
        <Typography>
          You have not been updated for{" "}
          <span style={{ color: "primary.main", fontWeight: "bold" }}>
            3 days
          </span>
        </Typography>
        <NewMetrics text="Update your metrics" />
      </Stack>
    </CustomCard>
  );
};

export default StatsInfoBox;
