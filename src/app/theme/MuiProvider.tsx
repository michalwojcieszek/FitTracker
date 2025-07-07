"use client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import { lightTheme, darkTheme } from "../theme";
import createEmotionCache from "./emotionCache";
import { CacheProvider } from "@emotion/react";
import { useThemeStore } from "@/stores/themeStore";

const clientSideEmotionCache = createEmotionCache();

export default function MuiProvider({ children }: { children: ReactNode }) {
  const { isDark } = useThemeStore();
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
