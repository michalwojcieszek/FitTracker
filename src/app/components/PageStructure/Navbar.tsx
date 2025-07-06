"use client";
import { Box, Container, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      component="header"
      bgcolor="primary.main"
      color="white"
      py={2}>
      <Container>
        <Typography
          variant="h5"
          component="h5">
          FitTracker
        </Typography>
      </Container>
    </Box>
  );
};

export default Navbar;
