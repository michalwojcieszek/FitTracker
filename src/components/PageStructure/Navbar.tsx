"use client";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import ThemeSwitch from "../UI/ThemeSwitch/ThemeSwitch";

const Navbar = () => {
  return (
    <Box
      component="header"
      bgcolor="primary.main"
      color="white"
      py={2}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            component="h5">
            FitTracker
          </Typography>
          <ThemeSwitch />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
