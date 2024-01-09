"use client";
import { useState, useEffect } from "react";
import SearchBar from "../_SearchBar/SearchBar";

// Components
import PostLink from "../PostLink/PostLink"

// Style
import style from "./post.module.css";

function PostsList({ posts }) {
  // Search bar
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [postsDisplay, setPostDisplay] = useState(searchTerm.length < 1 ? posts : searchResults);
  return (
    <div>
      <SearchBar posts={posts} setPostDisplay={setPostDisplay}/>
      <div className={style.postList}>
        {
          postsDisplay.map((post) => (
            <PostLink 
              key={post.filePath} 
              data={post.data} 
              filePath={post.filePath} 
            />
          ))
        }
      </div>
    </div>
  );
}

export default PostsList;