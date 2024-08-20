import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

function ListPostCard(
    {
        post
    }: {
        post: {
            id: string;
            title: string;
            tags: any[];
            description: string;
            cover: string;
            createdDate: string;
            lastEdited: string;
            url: string;
            public: boolean;
            slug: {
                content: string;
                link: null;
            };
        };
    }
) {
    console.log(JSON.stringify(post, null, 2));

/*
{
  "title": "Clean Code com Princípios S.O.L.I.D",
  "tags": [
    {
      "id": "9e47d657-4286-4f8d-874b-3f80cf524882",
      "name": "S.O.L.I.D",
      "color": "brown"
    },
    {
      "id": "f07d377f-d2cc-44cb-8365-e6daa4c398d4",
      "name": "Clean code",
      "color": "purple"
    },
    {
      "id": "90c03c31-0ec5-442a-950c-b9b7168913b9",
      "name": "Boas Praticas",
      "color": "orange"
    }
  ],
  "description": "Quando se trata de escrever código de qualidade, existem várias diretrizes e princípios que podem nos ajudar a alcançar esse objetivo. ",
  "cover": "https://i.imgur.com/3ToN0IJ.png",
  "createdDate": "2024-08-09T19:40:00.000Z",
  "lastEdited": "2024-08-16T20:12:00.000Z",
  "url": "/posts/conceitos-solid-cleancode",
  "publicpost": true,
  "slug": "conceitos-solid-cleancode"
}
*/

    return (
        <motion.div 
            className='flex flex-row items-center justify-left w-full h-full gap-6 bg-white shadow-md rounded-2xl p-6 p-8'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = post.url}
        >
            <div className='flex flex-col items-center justify-center h-full'>
                <Image
                    src={post.cover}
                    alt='Cover'
                    width={150}
                    height={150}
                    className='rounded-lg'
                />
            </div>
            <div className='flex flex-col items-left justify-center w-2/3 h-full gap-2 p-4'>
                <h1 className='text-md font-bold'>{post.title}</h1>
                <div className='flex flex-row items-center justify-left gap-2'>
                    {post.tags.map((tag) => (
                        <div key={tag.id} className={`text-white rounded-lg p-1`} style={{ backgroundColor: tag.color }}>
                            <p className='text-xs'>{tag.name}</p>
                        </div>
                    ))}
                </div>
                <p className='text-lg'>{post.description}</p>
            </div>
        </motion.div>
    );
}

function EmptyListPostCard() {
    return (
        <motion.div 
            className='flex flex-row items-center justify-left w-full h-full gap-6 bg-white shadow-md rounded-2xl p-6 p-8'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
                    animate={{ scale: [1, 1.1, 1.2, 1.1, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                >
                    <div className='w-40 h-6 bg-gray rounded-lg' />
                </motion.div>
                <motion.div
                    className='w-40 h-6 bg-gray rounded-lg'
                    animate={{ scale: [1, 1.1, 1.2, 1.1, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                >
                    <div className='w-40 h-6 bg-gray rounded-lg' />
                </motion.div>
                <motion.div
                    className='w-40 h-6 bg-gray rounded-lg'
                    animate={{ scale: [1, 1.1, 1.2, 1.1, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                >
                    <div className='w-40 h-6 bg-gray rounded-lg' />
                </motion.div>
                <motion.div
                    className='w-40 h-6 bg-gray rounded-lg'
                    animate={{ scale: [1, 1.1, 1.2, 1.1, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                >
                    <div className='w-40 h-6 bg-gray rounded-lg' />
                </motion.div>
                <motion.div
                    className='w-40 h-6 bg-gray rounded-lg'
                    animate={{ scale: [1, 1.1, 1.2, 1.1, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                >
                    <div className='w-40 h-6 bg-gray rounded-lg' />
                </motion.div>
            </div>
        </motion.div>
    );
}

export { ListPostCard, EmptyListPostCard };