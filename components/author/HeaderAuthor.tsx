import Link from "next/link";
import Image from "next/image";

/*
            <div>
                <img src={authorData.authorBanner} alt="Banner" />
            </div>
            <div>
                <img src={authorData.authorProfilePicture} alt="Profile" />
                <h1>{authorData.authorName}</h1>
                <p>{authorData.authorBio}</p>
                <a href={authorData.authorWebsite}>Website</a>
                <a href={authorData.authorGithub}>Github</a>
                <a href={authorData.authorTwitter}>Twitter</a>
                <a href={authorData.authorInstagram}>Instagram</a>
                <a href={`mailto:${authorData.authorEmail}`}>Email</a>
            </div>


*/

import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

import { motion } from "framer-motion";

export function HeaderAuthor({
  authorBanner,
  authorProfilePicture,
  authorName,
  authorBio,
  authorWebsite,
  authorGithub,
  authorTwitter,
  authorInstagram,
  authorEmail,
  posts,
}: {
  authorBanner: string;
  authorProfilePicture: string;
  authorName: string;
  authorBio: string;
  authorWebsite: string;
  authorGithub: string;
  authorTwitter: string;
  authorInstagram: string;
  authorEmail: string;
  posts: any[];
}) {
  const postCount = posts.length;
  return (
    <>
      <div className="flex flex-col items-center justify-center py-2 gap-4 p-6 max-w-7xl mx-auto">
        <div className="w-full flex flex-col items-center justify-center mt-5 mb-5
        relative">
            <Image
                src={authorBanner}
                alt="Banner"
                width={900}
                height={750}
                className="rounded-lg shadow-lg object-cover object-center h-96 md:h-96 lg:h-96 xl:h-96"
                quality={100}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              flex flex-col items-center justify-center gap-4 p-6 rounded-lg">
                <Image
                    src={authorProfilePicture}
                    alt="Profile"
                    width={150}
                    height={150}
                    className="rounded-full"
                    quality={100}
                />
                <h1 className="text-5xl font-bold text-white">{authorName}</h1>
            </div>
            {/*  
              Social Media Links se existirem
            */}
            <div className="flex flex-row items-center justify-center gap-4 p-6 rounded-lg">
                {authorWebsite && (
                    <motion.div className="bg-white text-white rounded-lg p-2"
                        whileHover={{ scale: 1.5, rotate: 23 }}
                    >
                      <Link href={authorWebsite} target="_blank">
                          <FaGlobe size={30} className="text-foreground" />
                      </Link>
                    </motion.div>
                )}
                {authorGithub && (
                    <motion.div className="bg-white text-white rounded-lg p-2"
                        whileHover={{ scale: 1.5, rotate: 23 }}
                    >
                      <Link href={authorGithub} target="_blank">
                          <FaGithub size={30} className="text-foreground" />
                      </Link>
                    </motion.div>
                )}
                {authorTwitter && (
                    <motion.div className="bg-white text-white rounded-lg p-2"
                        whileHover={{ scale: 1.5, rotate: 23 }}
                    >
                      <Link href={authorTwitter} target="_blank">
                          <FaTwitter size={30} className="text-foreground" />
                      </Link>
                    </motion.div>
                )}
                {authorInstagram && (
                    <motion.div className="bg-white text-white rounded-lg p-2"
                        whileHover={{ scale: 1.5, rotate: 23 }}
                    >
                      <Link href={authorInstagram} target="_blank">
                          <FaInstagram size={30} className="text-foreground" />
                      </Link>
                    </motion.div>
                )}
                {authorEmail && (
                    <motion.div className="bg-white text-white rounded-lg p-2"
                        whileHover={{ scale: 1.5, rotate: 23 }}
                    >
                      <Link href={`mailto:${authorEmail}`} target="_blank">
                          <FaEnvelope size={30} className="text-foreground" />
                      </Link>
                    </motion.div>
                )}
            </div>
        </div>
    </div>
    <div className="flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white shadow-lg max-w-7xl mx-auto m-6">
          <p className="text-lg text-foreground">{authorBio}</p> <p className="text-lg text-foreground">Total de posts  {postCount}</p>
    </div>
    </>
  );
}

export function HeaderAuthorEmpty() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white shadow-lg max-w-7xl mx-auto m-6"
      initial={{ opacity: 0, top: -20, rotate: 5 }}
      animate={{ opacity: 1, rotate: [0, 5, 10, 15, 20, 15, 10, 5, 0, -5, -10, -15, -20, 15, 10, 5, 0], transition: { duration: 3 } }}
      transition={{ duration: 0.1, repeat: Infinity }}
      whileHover={{ top: 10, rotate: 0 }}
    >
      <motion.div
        className="w-40 h-40 bg-gray rounded-lg"
        animate={{ scale: [1, 1.1, 1.2, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </motion.div>
    
  );
}