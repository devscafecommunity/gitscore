// https://cafe-content.vercel.app/api/blog/postpreview/<slug>
import Head from "next/head";

export default function PostHeadMeta({ frontMatter, slug }) {
    let preview = `https://cafe-content.vercel.app/api/blog/postpreview/${slug}`;
    return (
        <Head>
            <meta property="og:image" content={preview} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
        </Head>
    );
}
