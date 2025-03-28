import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

// Icons - Lupe, Home and Star Fa Icons
import { FaCalendar
  // ,FaNewspaper 
} from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
// import { GiAnvilImpact } from "react-icons/gi";
// Theme icons
import { FaMoon, FaSun } from "react-icons/fa";

// Function for theme change chacra-ui
import { useColorMode } from "@chakra-ui/react";

// Components
import { Image, Tooltip } from "@chakra-ui/react";

function ThemeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = colorMode === "light" ? "bg-white" : "bg-gray-800";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      whileHover={{ scale: 1.1, rotate: 20, transition: { duration: 0.3 } }}
      className="cursor-pointer"
    >
      <div
        className={`flex items-center gap-2 bg-white p-2 rounded-full shadow-md ${theme} text-gray-800 p-4`}
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? <FaMoon size={40} /> : <FaSun size={40} />}
      </div>
    </motion.div>
  );
}

export default function Navbar() {
  // Theme var for change non chakra-ui components
  const { colorMode } = useColorMode();
  const theme = colorMode === "light" ? "bg-white" : "bg-gray-800";
  const buttonTheme = colorMode === "light" ? "text-gray-800" : "text-white";

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center items-center p-4 shadow-md ${theme} m-8 rounded-xl bg-opacity-50 backdrop-filter backdrop-blur-xl
      max-w-2xl mx-auto
      `}
    >
      <div className="flex items-center gap-4 text-2xl justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.1, rotate: 20, transition: { duration: 0.3 } }}
          className="cursor-pointer"
        >
          <Tooltip
            label="Home"
            aria-label="Home"
            placement="bottom"
            className="cursor-pointer z-50"
          >
            <div
              className={`flex items-center gap-2 bg-white p-2 rounded-full shadow-md ${theme} ${buttonTheme} p-4`}
            >
              <Link href="/">
                <Image src="/logo.png" alt="logo" width={50} height={50} />
              </Link>
            </div>
          </Tooltip>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.1, rotate: 20, transition: { duration: 0.3 } }}
          className="cursor-pointer"
        >
          <Tooltip
            label="Blog"
            aria-label="Home"
            placement="bottom"
            className="cursor-pointer z-50"
          >
            <div
              className={`flex items-center gap-2 bg-white p-2 rounded-full shadow-md ${theme} ${buttonTheme} p-4`}
            >
              <Link href="/blog">
                <IoDocumentTextOutline
                  size={40}
                  className="cursor-pointer text-gray-800"
                />
              </Link>
            </div>
          </Tooltip>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.1, rotate: 20, transition: { duration: 0.3 } }}
          className="cursor-pointer"
        >
          <Tooltip
            label="Eventos"
            aria-label="Home"
            placement="bottom"
            className="cursor-pointer z-50"
          >
            <div
              className={`flex items-center gap-2 bg-white p-2 rounded-full shadow-md ${theme} ${buttonTheme} p-4`}
            >
              <Link href="/events">
                <FaCalendar
                  size={40}
                  className="cursor-pointer text-gray-800"
                />
              </Link>
            </div>
          </Tooltip>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.1, rotate: 20, transition: { duration: 0.3 } }}
          className="cursor-pointer"
        >
          <Tooltip
            label="Notícias"
            aria-label="Home"
            placement="bottom"
            className="cursor-pointer z-50"
          >
            <div
              className={`flex items-center gap-2 bg-white p-2 rounded-full shadow-md ${theme} ${buttonTheme} p-4`}
            >
              <Link href="/news">
                <FaNewspaper
                  size={40}
                  className="cursor-pointer text-gray-800"
                />
              </Link>
            </div>
          </Tooltip>
        </motion.div> */}

        {/* 
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.1, rotate: 20, transition: { duration: 0.3 } }}
          className="cursor-pointer"
        >
          <Tooltip
            label="Notícias"
            aria-label="Home"
            placement="bottom"
            className="cursor-pointer z-50"
          >
            <div
              className={`flex items-center gap-2 bg-white p-2 rounded-full shadow-md ${theme} ${buttonTheme} p-4`}
            >
              <Link href="/codeforge">
                <GiAnvilImpact size={40} className="cursor-pointer text-gray-800" />
              </Link>
            </div>
          </Tooltip>
        </motion.div> 
        */}


        <ThemeSwitch />
      </div>
    </motion.div>
  );
}
