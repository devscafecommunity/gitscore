// https://cafe-content.vercel.app/api/blog/postpreview/<slug>
import Head from "next/head";

export default function PostHeadMeta({ frontMatter, slug }) {
    let preview = `https://cafe-content.vercel.app/api/blog/postpreview/${slug}`;
    return (
        <Head>
            <meta property="og:image" content={preview} />
        </Head>
    );
}
