import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";


// Components
import NewerPosts from "../components/Newer/NewerPosts";

export default function Newer({ posts }) {

    return (
        <div>
            <span style={{paddingTop: "4rem",}}></span>
            <NewerPosts posts={posts} />
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
