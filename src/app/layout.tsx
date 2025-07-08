import { Montserrat } from "next/font/google";
import MuiProvider from "./theme/MuiProvider";
import Navbar from "@/components/PageStructure/Navbar/Navbar";
import Footer from "@/components/PageStructure/Footer";
import Main from "@/components/PageStructure/Main";
import { Box, Stack } from "@mui/material";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "FitTracker",
  description: "Track your weight and health metrics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ height: "100%" }}>
        <MuiProvider>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}>
            <Navbar />
            <Main>{children}</Main>
            <Footer />
          </Stack>
        </MuiProvider>
      </body>
    </html>
  );
}
