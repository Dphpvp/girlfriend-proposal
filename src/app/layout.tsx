import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/fonts";

export const metadata: Metadata = {
  title: "Para ti 👩‍❤️‍👨",
  description: "Propuesta de noviazgo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
