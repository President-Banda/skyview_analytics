import "./globals.css";

export const metadata = {
  title: "SkyView Analytics Center — Cloud, AI & IT Solutions",
  description:
    "Enterprise-grade cloud hosting, AI/ML infrastructure, web development, pentesting, and expert technical training based in Lilongwe, Malawi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
