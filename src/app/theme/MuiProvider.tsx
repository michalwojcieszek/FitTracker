"use client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import { lightTheme } from "../theme";
import createEmotionCache from "./emotionCache";
import { CacheProvider } from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();

export default function MuiProvider({ children }: { children: ReactNode }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
