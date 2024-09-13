"use client";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

// Global components
import Navbar from "@/components/general/Navbar";
import CookiesAlert from "@/components/general/CookiesAlert";

// Head
import Head from "next/head";
const data = {
  title: "HUB Dev's Café",
  icon: "/logo.png",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <CacheProvider>
        <div className="flex flex-col min-h-screen">
          <Head>
            <title>{data.title}</title>
            <link rel="icon" href={data.icon} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <CookiesAlert />
          <Navbar />
          <Component {...pageProps} />
        </div>
      </CacheProvider>
    </ChakraProvider>
  );
}
