import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";

// Components
import PostsList from "../components/Index/PostsList/PostsList";
import Header from "../components/Index/Header/Header";

const meta = {
  title: "Dev's Cafe blog",
  description: "Blog ofcial Dev's Cafe",
  url: "https://blog.devscafe.pt",
  image: "https://blog.devscafe.pt/logo.png",
};

export default function Index({ posts }) {
  return (
    <div>
      <div>
        <Header />
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