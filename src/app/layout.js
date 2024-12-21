import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "./components/StarBackground";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Parth Gala",
  description: "Personal Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <StarsCanvas />
      </body>
    </html>
  );
}
