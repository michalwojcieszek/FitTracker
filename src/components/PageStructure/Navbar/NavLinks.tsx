"use client";
import { PageLocationEnum } from "@/types/pageLocationEnum";
import { Box } from "@mui/material";
import NewMetrics from "../../NewMetrics/NewMetrics";
import CustomLink from "../../UI/Links/CustomLink";

const NavLinks = () => {
  return (
    <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
      <CustomLink href={PageLocationEnum.SIGNUP_PAGE}>Sign Up</CustomLink>
      <CustomLink href={PageLocationEnum.LOGIN_PAGE}>Log In</CustomLink>
      <CustomLink href={PageLocationEnum.PROFILE_PAGE}>My profile</CustomLink>
      <NewMetrics text="Add new metrics" />
    </Box>
  );
};

export default NavLinks;
