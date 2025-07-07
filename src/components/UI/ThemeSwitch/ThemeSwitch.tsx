"use client";
import { useThemeStore } from "@/stores/themeStore";
import { Box, Switch, Typography } from "@mui/material";

const ThemeSwitch = () => {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <Box
      sx={{ display: "flex", alignItems: "center" }}
      px={2}
      bgcolor="white"
      borderRadius={3}>
      <Switch onChange={toggleTheme} />
      <Typography color="text.primary">{isDark ? "🌙" : "☀️"}</Typography>
    </Box>
  );
};

export default ThemeSwitch;
