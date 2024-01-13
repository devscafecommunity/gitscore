// https://cafe-content.vercel.app/api/blog/postpreview/<slug>
import Head from "next/head";

export default function PostHeadMeta({ frontMatter, slug }) {
    let preview = `${process.env.SEARCH_ENGINE}/api/blog/postpreview/${slug}`;
    return (
        // Large Image description
        // discord, twitter, facebook, linkedin, telegram, whatsapp
        <Head>
            <title>{frontMatter.title}</title>
            <meta name="title" content={frontMatter.title} />
            <meta name="description" content={frontMatter.description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={preview} />
            <meta property="og:title" content={frontMatter.title} />
            <meta property="og:description" content={frontMatter.description} />
            <meta property="og:image" content={preview} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={preview} />
            <meta property="twitter:title" content={frontMatter.title} />
            <meta property="twitter:description" content={frontMatter.description} />
            <meta property="twitter:image" content={preview} />
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"></link> */}
        </Head>
    );
}
