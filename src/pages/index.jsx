import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import Head from "next/head";

// Components
import PostsList from "../components/Index/PostsList";
import Header from "../components/Index/Header";

const meta = {
  title: "Dev's Cafe blog",
  description: "Blog ofcial Dev's Cafe",
  url: "https://blog.devscafe.pt",
  image: "https://blog.devscafe.pt/logo.png",
};
  
const centerAlign = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}

const divStyle = {
  width: "100%",
  maxWidth: "800px",
  padding: "0 1rem",
}

export default function Index({ posts }) {
  return (
    <div
      style={{
        ...centerAlign,
        flex: 1,
      }}
    >
      <div
        style={{
          ...centerAlign,
          ...divStyle,
        }}
      >
        <Header />
      </div>
      <div
        style={{
          ...centerAlign,
          ...divStyle,
        }}
      >
        <PostsList posts={posts} />
      </div>
    </div>
  );
}

export function getStaticProps() {
  const posts = postFilePaths().map((filePath) => {
    
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}