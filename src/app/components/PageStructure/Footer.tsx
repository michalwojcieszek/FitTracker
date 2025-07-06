"use client";
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      bgcolor="grey.200"
      pt={2}>
      <Container>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center">
          © 2025 FitTracker. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
