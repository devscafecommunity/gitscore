"use client";

import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
// Imports
import Navbar from "../../components/general/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex gap-2">
          <Navbar />
          {children}
      </body>
    </html>
  );
}
