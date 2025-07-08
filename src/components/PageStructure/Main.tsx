"use client";
import { Box, Container } from "@mui/material";
import { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor="grey.200"
      maxHeight="100vh"
      flexGrow={1}
      justifyContent="center"
      alignItems="center"
      py={3}>
      <Box
        component="main"
        display="flex"
        justifyContent="center"
        alignItems="center">
        <Container>{children}</Container>
      </Box>
    </Box>
  );
};

export default Main;
