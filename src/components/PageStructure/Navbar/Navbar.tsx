"use client";
import { Box, Container } from "@mui/material";
import ThemeSwitch from "../../UI/ThemeSwitch/ThemeSwitch";
import NavLinks from "./NavLinks";
import { PageLocationEnum } from "@/types/pageLocationEnum";
import CustomLink from "@/components/UI/Links/CustomLink";

const Navbar = () => {
  return (
    <Box
      component="header"
      bgcolor="primary.main"
      color="white"
      py={2}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <CustomLink
            href={PageLocationEnum.MAIN_PAGE}
            variant="h5"
            component="h5">
            FitTracker
          </CustomLink>
          <NavLinks />
          <ThemeSwitch />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
