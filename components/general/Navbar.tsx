"use client";

// components/general/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";

const routes = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Search",
    route: "/search",
  },
  {
    name: "Recent",
    route: "/recent",
  },
];

export default function Navbar() {
  // Fixed on bottom
  // the nav is outscreen but when hover it will show: whileHover={{ scale: 1.1 }}
  return (
    <motion.div
      initial={{ opacity: 0, top: -20, rotate: 5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ top: 10, rotate: 0 }}
      style={{ position: "fixed" }}
      className="flex flex-col bg-white h-16 p-4 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-md z-50"
    >
      <div className="flex flex-row gap-6 w-full h-full items-center">
        <div className="flex flex-row items-center justify-center gap-6">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
        </div>
        <motion.div
          className="flex flex-row items-center justify-center gap-6 bg-white shadow-md text-white rounded-lg p-2"
          whileHover={{ scale: 1.5, rotate: 23 }}
        >
          <Link href="/search">
            <FaSearch size={30} className="text-foreground" />
          </Link>
        </motion.div>
        <motion.div
          className="flex flex-row items-center justify-center gap-6 bg-white shadow-md text-white rounded-lg p-2"
          whileHover={{ scale: 1.5, rotate: 23 }}
        >
          <Link href="/recent">
            <FaStar size={30} className="text-foreground" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
