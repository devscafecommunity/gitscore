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
            tags: string[];
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
                <p className='text-sm'>{post.tags.join(', ')}</p>
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