import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SkyView Analytics Center",
  description: "Insight beyond data, direction that matters",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <title>SkyView Analytics Center</title>
    </html>
  );
}
