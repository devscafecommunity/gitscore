"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


export default function AuthorCard({ 
    author,
    authorProfilePicture,
    authorIndividualID,
    authorName
}: {
    author: string,
    authorProfilePicture: string,
    authorIndividualID: string,
    authorName: string
}) {
    return (
        <motion.div 
            className="flex flex-col items-center justify-center gap-4 p-4 bg-white shadow-md rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Link
                href={`/author/${authorIndividualID}`}
                className="flex flex-row items-center justify-left gap-4"
            >
                <Image
                    src={authorProfilePicture}
                    alt="Author Profile Picture"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <p>{authorName}</p>
            </Link>
        </motion.div>
    );
}