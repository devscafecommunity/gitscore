import React from 'react'
import Image from 'next/image'

export default function PostHeader({ frontMatter }) {

    return (
        <div id="post-header">
            <div id="post-headdings">
                 <h1><i><ins>{frontMatter.title}</ins></i></h1>
                {frontMatter.description && (
                <p id="description">{frontMatter.description}</p>
                )}
            </div>
            <div id="post-meta">
                <p>{frontMatter.date}</p>
                <p>{" • "}</p>
                <p>{frontMatter.author}</p>
            </div>
            <div id={"post-header-image-container"}>
                <Image
                    src={frontMatter.cover}
                    alt={`Cover Image for ${frontMatter.title}`}
                    width={500}
                    height={400}
                />
            </div>
        </div>
    )
}