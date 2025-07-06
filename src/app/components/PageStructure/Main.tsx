"use client";
import { Box, Container } from "@mui/material";
import { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      bgcolor="grey.200">
      <Box
        component="main"
        flexGrow={1}
        display="flex"
        justifyContent="center"
        alignItems="center">
        <Container>{children}</Container>
      </Box>
    </Box>
  );
};

export default Main;
