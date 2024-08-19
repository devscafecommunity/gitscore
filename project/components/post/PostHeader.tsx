"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface PostProps {
  title: string;
  content: string;
  cover: string;
  banner: string;
  tags: any[];
  createdDate: string;
  lastEditedDate: string;
  author: string;
  authorProfilePicture: string;
  authorIndividualID: string;
  authorName: string;
}

export function PostHeader(props: PostProps) {
  const {
    title,
    content,
    banner,
    cover,
    tags,
    createdDate,
    lastEditedDate,
    author,
    authorProfilePicture,
    authorIndividualID,
    authorName,
  } = props;

  return (
    // Render post content with tailwindcss/typography and content(_html)
    <div>
      <motion.div className="flex flex-col items-center justify-center w-full h-full gap-6 bg-white shadow-md rounded-2xl p-6 p-8">
        <div className="relative flex flex-col h-full justify-center items-center gap-6">
          <Image
            src={banner}
            alt="Banner"
            width={650}
            height={650}
            className="rounded-lg"
          />
          <Image
            src={cover}
            alt="Cover"
            width={290}
            height={290}
            className="rounded-lg absolute transform"
          />
        </div>
        <div className="flex flex-col items-left justify-center h-full gap-2 p-4">
          <p className="text-sm">Atualizado em {
            new Date(lastEditedDate).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default PostHeader;
