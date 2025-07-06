import { Montserrat } from "next/font/google";
import MuiProvider from "./theme/MuiProvider";
import Navbar from "./components/PageStructure/Navbar";
import Footer from "./components/PageStructure/Footer";
import Main from "./components/PageStructure/Main";

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
    <html
      lang="en"
      suppressHydrationWarning>
      <body>
        <MuiProvider>
          <Navbar />
          <Main>{children}</Main>
          <Footer />
        </MuiProvider>
      </body>
    </html>
  );
}
