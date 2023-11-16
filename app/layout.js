import { Barlow } from "next/font/google";
import "./globals.css";
import "tw-elements/dist/css/tw-elements.min.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { ContextProvider } from "../context/index";
import { Providers } from "@/providers/NextUIProvider";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Eddy Graphics and Priniting",
  description: "Graphics and Printing ordering website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${barlow.className} relative`}>
        <ContextProvider>
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </ContextProvider>
      </body>
    </html>
  );
}
