// components/CustomCursor.js

"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

// Tema
import { useColorMode } from "@chakra-ui/react";

const CustomCursor = () => {
  // Motion values para rastrear a posição do cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Aplicar uma suavização na movimentação do cursor
  const springX = useSpring(cursorX, { stiffness: 200, damping: 20 });
  const springY = useSpring(cursorY, { stiffness: 200, damping: 20 });

  // Estado para controlar o crescimento do cursor ao clicar
  const [isClicked, setIsClicked] = useState(false);

  // Listener de movimento do mouse para atualizar a posição do cursor
  useEffect(() => {
    const handleMouseMove = (e:
        | MouseEvent
        | { clientX: number; clientY: number }
    ) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200); // Reseta após 200ms
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleClick);
    };
  }, [cursorX, cursorY]);

  const { colorMode } = useColorMode();
  const theme = colorMode === "light" ? "bg-gray-800" : "bg-white";

  return (
    <>
      {/* Animação do rastro */}
      <motion.div
        className={`fixed top-0 left-0 z-100 pointer-events-none`}
        style={{
          x: useSpring(cursorX, { stiffness: 50, damping: 30 }),
          y: useSpring(cursorY, { stiffness: 50, damping: 30 }),
          zIndex: 100
        }}
        transition={{ type: "spring" }}
      >
        <motion.div
          className={`w-6 h-6 rounded-full opacity-10 ${theme}`}
          style={{ mixBlendMode: "difference" }}
        />
      </motion.div>

      {/* Cursor principal */}
      <motion.div
        className={`fixed top-0 left-0 z-50 pointer-events-none`}
        style={{
          x: springX,
          y: springY,
          zIndex: 100,
          opacity: isClicked? 0 : 1,
          transformOrigin: "center",
          scale: 1,
          mixBlendMode: "difference"
        }}
        animate={isClicked ? { scale: 2 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <motion.div
          className={`w-4 h-4 rounded-full cursor-style ${theme}`}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
