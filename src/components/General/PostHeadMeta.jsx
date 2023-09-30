// https://cafe-content.vercel.app/api/blog/postpreview/<slug>
import Head from "next/head";

export default function PostHeadMeta({ frontMatter, slug }) {
    let preview = `https://cafe-content.vercel.app/api/blog/postpreview/${slug}`;
    return (
        <Head>
            <title>{frontMatter.title}</title>
            <meta name="description" content={frontMatter.description} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={frontMatter.title} />
            <meta property="og:description" content={frontMatter.description} />
            <meta property="og:image" content={preview} />
            <meta property="og:article:published_time" content={frontMatter.date} />
            <meta property="og:article:author" content={frontMatter.author} />
        </Head>
    );
}
