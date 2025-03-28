import React from 'react'
import Image from 'next/image'

export default function PostHeader({ frontMatter }) {

    return (
        <div id="post-header">
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <h1>{frontMatter.title}</h1>
                </div>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <Image
                        src={frontMatter.cover}
                        alt={`Cover Image for ${frontMatter.title}`}
                        width={500}
                        height={400}
                        style={{borderRadius: "10px"}}
                    />
                </div>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "1rem"}}>
                    <p>{frontMatter.date}</p>
                    <p>{" • "}</p>
                    <p>{frontMatter.author}</p>
                </div>
            </div>
        </div>
    )
}