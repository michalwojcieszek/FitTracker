import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
  palette: {
    mode: "dark",
    primary: { main: "#8bc34a" },
    text: {
      primary: "#616161",
    },
  },
});

export const lightTheme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
  palette: {
    mode: "light",
    primary: { main: "#8bc34a" },
    text: {
      primary: "#616161",
    },
  },
});
