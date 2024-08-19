import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "../../components/general/Navbar";
let icon = "/assets/favicon.ico";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={icon} />
      </head>
      <body>
      <Navbar />
      {children}
      </body>
    </html>
  );
}