"use client";
import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";

// Components
import PostLink from "../PostLink/PostLink"

// Style
import style from "./Post.module.css";

function PostsList({ posts }) {
  const [postsDisplay, setPostDisplay] = useState(posts);

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