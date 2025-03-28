  /*
Posts:

[
  {
    content: '\n' +
      'This is an example post, with a [link](https://nextjs.org) and a React component:\n' +
      '\n' +
      '\n' +
      'The title and description are pulled from the MDX file and processed using `gray-matter`. Additionally, links are rendered using a custom component passed to `next-mdx-remote`.\n' +
      '\n' +
      'Go back [home](/).',
    data: {
      author: 'Example Author',
      title: 'Example Post',
      description: 'This frontmatter description will appear below the title',
      date: '23-09-2023',
      image: '/logo.png',
      cover: '/logo.png'
    },
    filePath: 'example-post.mdx'
  }
]

*/

"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import PostLink from "../Index/PostLink/PostLink";

    // Filter posts by date desc -> asc
    // newest -> oldest
    // dateformat: dd-mm-yyyy
function filterDate(posts) {
    return posts.sort((a, b) => {
        const dateA = a.data.date.split("-").reverse().join();
        const dateB = b.data.date.split("-").reverse().join();
        return dateB.localeCompare(dateA);
    });
}

export default function NewerPosts({ posts }) {
    let filteredPosts = filterDate(posts);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                maxWidth: "800px",
                padding: "0 1rem",
            }}
        >
            <h1>Posts Recentes.</h1>
            {/* <ul>
                {filteredPosts.map((post) => (
                    <li key={post.filePath} >
                        <div
                            style={{
                                backgroundColor: "white",
                                padding: "1rem",
                                margin: "1rem",
                                borderRadius: "10px",
                            }}
                        >
                            <Link
                                as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
                                href={`/posts/[slug]`}
                            >
                                <h2>{post.data.title}</h2>
                            </Link>
                            <p>{post.data.description}</p>
                            <p>{post.data.date}</p>
                            <p>by {post.data.author}</p>
                        </div>
                    </li>
                ))}
            </ul> */}
            <div>
                {
                    filteredPosts.map((post) => (
                        <PostLink data={post.data} filePath={post.filePath} key={post.filePath} />
                    ))
                }
            </div>
        </div>
    );
}