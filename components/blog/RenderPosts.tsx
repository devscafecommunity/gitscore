import React from "react";
import { useColorMode } from "@chakra-ui/react";

export default function RenderPosts({ html }: { html: string }) {
  const { colorMode } = useColorMode();

  const bgColor = colorMode === "light" ? "prose-proselight" : "prose-prosedark";
  const bgMajor = colorMode === "light" ? "bg-white" : "bg-black";

  return (
    <div className={`
    flex flex-col items-center justify-center gap-6 pt-8 m-10 rounded-lg
    ${bgMajor} opacity-90 shadow-lg w-3/4
    `}>
      <div
        className={`prose ${bgColor} font-mono text-lg w-3/4`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
    </div>
  );
}