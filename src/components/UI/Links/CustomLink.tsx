"use client";
import NextLink from "next/link";
import { Link as MuiLink, Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

type CustomLinkProps = {
  href: string;
  children: ReactNode;
} & TypographyProps;

const CustomLink = ({ href, children, ...props }: CustomLinkProps) => {
  return (
    <NextLink
      href={href}
      passHref
      legacyBehavior>
      <MuiLink
        underline="none"
        color="inherit">
        <Typography {...props}>{children}</Typography>
      </MuiLink>
    </NextLink>
  );
};

export default CustomLink;
