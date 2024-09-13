import { NotionRenderer } from "@notion-render/client";

//Plugins
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";

// React next
import { GetServerSideProps } from "next"; // Next server side props
import { useEffect, useState } from "react"; // React

// Notion client
import { notionClient } from "@/utils/Blog";

// Components
import RenderPosts from "@/components/blog/RenderPosts";
import PostHeader from "@/components/blog/PostHeader";

// Cookies
import { useCookies } from "react-cookie";

// Types
import PostData from "@/utils/interfaces/PostData";

// Head tags
import Head from "next/head";

// Static props
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params ?? {};
  if (!slug) {
    return {
      notFound: true,
    };
  }

  const res = await fetch(`https://hub.devscafe.pt/api/blog/posts/${slug}`); // Fetch the post content from the api: /api/blog/posts/[slug]
  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const post = await res.json();
  const notionRenderer = new NotionRenderer({
    client: notionClient,
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));

  const html = await notionRenderer.render(...post.content);


  return {
    props: {
      post: {
        ...post,
        contentstring: html,
      },
    },
  };
}


// Post page component
export default function PostPage({ post }: { post: PostData }) {
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie] = useCookies(["consent", "saved-posts", "read-posts"]);

  useEffect(() => {
    if (post) {
      setLoading(false);
    }
  }, [post]);

  if (loading) {
    return <div>Loading...</div>;
  }

  function setReaded(postSlug: string) {
    if (cookies.consent && postSlug) {
      const readPosts: { post: string; read: boolean }[] = cookies["read-posts"] ?? [];
      if (!readPosts.find((post) => post.post === postSlug)) {
        readPosts.push({
          post: postSlug,
          read: true,
        });
        setCookie("read-posts", readPosts, { path: "/" });
      }
    }
  }

  setReaded(post.id);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://hub.devscafe.pt/blog/posts/${post.slug}`} />
        <meta property="og:image" content={`https://content.devscafe.pt/api/blog/postpreview/${post.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="h-40" />
      <div className="flex flex-col items-center justify-center p-4">
        <PostHeader post={post} />
        <RenderPosts html={post.contentstring} />
      </div>
    </div>
  );
}
