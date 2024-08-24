"use client";
import { motion } from "framer-motion";
import { FaRss } from "react-icons/fa";

export default function RssBtn() {
  return (
    <motion.div
      className="flex flex-row items-center justify-center gap-4 z-10 fixed bottom-4 right-4 p-4 bg-white rounded-full shadow-md"
      whileHover={{ scale: 1.20 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.open("/api/rss", "_blank")}
    >
      <FaRss size={24} />
    </motion.div>
  );
}