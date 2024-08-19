/*
        <div
          key={index}
          className="flex flex-row items-center justify-start bg-white rounded-lg shadow-md p-4 gap-4"
        >
          <Link
            href={`/posts/${
              (post.properties.Slug as any).rich_text[0].plain_text
            }`}
          >
            <div className="relative w-full flex flex-col items-center justify-center rounded-lg">
              <Image
                src={post.properties.Banner.files[0].external.url}
                alt="Banner"
                width={300}
                height={300}
                className="rounded-lg shadow-lg object-cover object-center"
                quality={100}
              />
              <Image
                src={post.properties.Cover.files[0].external.url}
                alt="Cover"
                width={150}
                height={150}
                className="rounded-full shadow-lg object-cover object-center absolute"
                quality={100}
              />
            </div>
          </Link>
          <div className="flex flex-col items-left justify-center gap-2">
            <h1 className="text-2xl font-bold">
              {post.properties.Title.title[0].plain_text}
            </h1>
            <p className="text-lg">
              {post.properties.Description.rich_text[0].plain_text}
            </p>
            <div className="flex flex-row items-center justify-left p-2">
              
              {post.properties.Author.people.map((author: any) => {
                const authorData = getAuthorById(author.id);
                return (
                  <div key={author.id} className="flex items-center">
                    <Link
                      href={`/author/${authorData.properties["AuthorIndividualID"].rich_text[0].plain_text}`}
                      className="flex flex-row items-center justify-left gap-4"
                    >
                      <Image
                        src={
                          authorData.properties["Author Profile Picture"]
                            .files[0].external.url
                        }
                        alt="Author Profile Picture"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <p>{authorData.properties.Name.title[0].plain_text}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
*/

"use client";
import { motion } from "framer-motion";
import Image from "next/image";


export function PostCard({ 
  slug,
  title,
  description,
  banner,
  cover,
  tags,
  author,
  authorProfilePicture,
  authorIndividualID,
  authorName,
  createdDate,
  lastEditedDate
}: {
  slug: string,
  title: string,
  description: string,
  banner: string,
  cover: string,
  tags: any[],
  author: string,
  authorProfilePicture: string,
  authorIndividualID: string,
  authorName: string,
  createdDate: string,
  lastEditedDate: string
}) {
  return (
    <motion.div 
      className='flex flex-row items-center justify-left w-full h-1/2 gap-6 bg-white shadow-md rounded-2xl p-6 p-8
      max-w-2xl
      '
      whileHover={{ scale: 1.05, rotate: 0.5, transition: { duration: 0.5 }}}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.location.href = `/posts/${slug}`}
    >
      <div className='flex flex-col items-center justify-center h-full'>
        <Image
          src={cover}
          alt='Cover'
          width={150}
          height={150}
          className='rounded-lg'
        />
      </div>
      <div className='flex flex-col items-left justify-center w-2/3 h-full gap-2 p-4'>
        <h1 className='text-md font-bold'>{title}</h1>
        { tags.length > 0 ? (
          <div className='flex flex-row items-center justify-left gap-2'>
            {tags.slice(0, 3).map((tag, index) => (
              <p key={index} className={`text-md rounded-lg p-2 text-black`} style={{ backgroundColor: `${tag.color}` }}>{tag.name}</p>
            ))}
          </div>
        ) : null }
        <p className='text-sm'>{description}</p>
      </div>
    </motion.div>
  );
}

export function EmptyPostCard() {
  return (
    <motion.div 
      className='flex flex-row items-center justify-left w-full h-full gap-6 bg-white shadow-md rounded-2xl p-6 p-8'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className='flex flex-col items-center justify-center h-full'>
        <motion.div
          className='w-40 h-40 bg-gray rounded-lg'
          animate={{ scale: [1, 1.1, 1.2, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>
      <div className='flex flex-col items-left justify-center w-2/3 h-full gap-2 p-4'>
        <motion.div
          className='w-40 h-6 bg-gray rounded-lg'
          animate={{ width: ['30%', '50%', '100%', '50%', '30%'] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className='w-40 h-6 bg-gray rounded-lg'
          animate={{ width: ['30%', '50%', '100%', '50%', '30%'] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className='w-40 h-6 bg-gray rounded-lg'
          animate={{ width: ['30%', '50%', '100%', '50%', '30%'] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className='w-40 h-6 bg-gray rounded-lg'
          animate={{ width: ['30%', '50%', '100%', '50%', '30%'] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}
