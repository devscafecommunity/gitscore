// https://cafe-content.vercel.app/api/blog/postpreview/<slug>
import Head from "next/head";

export default function PostHeadMeta({ frontMatter, slug }) {
    let preview = `${process.env.SEARCH_ENGINE}/api/blog/postpreview/${slug}`;
    return (
        <Head>
            <meta property="og:type" content="website" />
            {/* <meta property="twitter:image" content={preview} /> */}
            {/* <meta property="og:image" content={preview} /> */}
            <meta property="og:image" content={frontMatter.cover} />
        </Head>
    );
}
