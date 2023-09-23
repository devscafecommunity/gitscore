"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function PostsList({ posts }) {
  // Search bar
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Search bar
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Search bar
  useEffect(() => {
    const results = posts.filter((post) =>
      post.data.title
        .toLowerCase()
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .replace(/\s+/g, "")
        .includes(
          searchTerm
            .toLowerCase()
            .replace(/[^a-zA-Z0-9 ]/g, "")
            .replace(/\s+/g, "")
        )
    );
    setSearchResults(results);
  }, [searchTerm]);

  // Search bar
  const postsToDisplay = searchTerm.length < 1 ? posts : searchResults;

  return (
    <div id={"post-list-container"}>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          id={"search-bar"}
        />
      </div>

      <div>
        <ul id={"post-list"}>
          {postsToDisplay.map((post) => (
            <li key={post.filePath} id={"post-list-object"}>
              <div>
                <Image
                  src={post.data.cover}
                  alt="Logo"
                  width={150}
                  height={150}
                  id={"post-list-image"}
                />
              </div>
              <div>
                <div>
                  <Link
                    as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
                    href={`/posts/[slug]`}
                  >
                    {post.data.title}
                  </Link>
                </div>
                <div>
                  <p>{post.data.description}</p>
                </div>
                <div>
                  <p>{post.data.date}</p>
                </div>
                <div>
                  <p>by {post.data.author}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
