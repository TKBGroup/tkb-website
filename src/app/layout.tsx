import type { Metadata } from "next";
import { montserrat } from "../../public/fonts/fonts";
import "./globals.css";
import Header from "@/components/features/navigation/Header";
import Footer from "@/components/features/footer/Footer";

export const metadata: Metadata = {
  title: "TKB Group",
  description: "Custom cabinetry and millwork.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
