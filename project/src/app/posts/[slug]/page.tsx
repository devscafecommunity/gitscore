import { getPageContent, getPageBySlug, notionClient, getAuthorByAuthorId} from "../../../../utils/Notion/NotionTools";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";

//Plugins
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";

import PostRender from "../../../../components/post/PostRender";
import PostHeader from "../../../../components/post/PostHeader";
import AuthorCard from "../../../../components/post/AuthorCard";

import Head from "next/head";

import type { Metadata } from 'next';

type PageProps = {
  params: {
    slug: string;
  };
};

// Função correta para metadados dinâmicos
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPageBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const title = (post.properties.Title as any).title[0].plain_text;
  const description = (post.properties.Description as any).rich_text[0].plain_text;
  const image = `https://content.devscafe.pt/api/blog/postpreview/${params.slug}`;
  const url = `${process.env.SELF_URL}/posts/${params.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      site: url,
      creator: '@devscafept',
    },
  };
}

async function Page({ params }: { params: { slug: string } }) {
  const post = await getPageBySlug(params.slug);

  //Redirect to not found page!
  if (!post) {
    notFound();
  }

  const blocks = await getPageContent(post.id);

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));

  const html = await notionRenderer.render(...blocks);

  let title = (post.properties.Title as any).title[0].plain_text;
  let banner = (post.properties.Banner as any).files[0].external.url;
  let cover = (post.properties.Cover as any).files[0].external.url;
  let tags = (post.properties.Tags as any).multi_select;
  let createdDate = (post.properties.CreatedDate as any).created_time;
  let lastEditedDate = (post.properties.LastEdited as any).last_edited_time;
  let author = (post.properties.Author as any).people[0].name;
  let authorId = (post.properties.Author as any).people[0].id;
  let description = (post.properties.Description as any).rich_text[0].plain_text;
  let publicpost = (post.properties.Public as any).checkbox;

  const authordata = await getAuthorByAuthorId(authorId);

  // Here just need the author Profile Picture, Name and AuthorID
  let authorProfilePicture = (authordata?.properties["Author Profile Picture"] as any).files[0].external.url;
  let authorName = (authordata?.properties.Name as any).title[0].plain_text;
  let authorIndividualID = (authordata?.properties.AuthorIndividualID as any).rich_text[0].plain_text;

  let metadata = {
    title: title,
    description: description,
    image: process.env.SEARCH_ENGINE + "/api/blog/postpreview/" + params.slug,
    url: `${process.env.SELF_URL}/posts/${params.slug}`,
    type: "article",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mx-auto px-4 gap-4 justify-items-center justify-center min-h-screen py-2 gap-4">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content={metadata.type} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={process.env.SELF_URL + "/posts/" + params.slug} />
        <meta name="twitter:creator" content={author} />
      </Head>
      { publicpost ? (
        <div className="flex flex-col items-center justify-center w-full h-full gap-6 p-4">
          <PostHeader
            title={title}
            content={description}
            banner={banner}
            cover={cover}
            tags={tags}
            createdDate={createdDate}
            lastEditedDate={lastEditedDate}
            author={author}
            authorProfilePicture={authorProfilePicture}
            authorIndividualID={authorIndividualID}
            authorName={authorName}
          />
          <AuthorCard
            author={author}
            authorName={authorName}
            authorProfilePicture={authorProfilePicture}
            authorIndividualID={authorIndividualID}
          />
          <hr className="w-1/2 border-gray-200 my-8" />
          <div className="max-w-2xl">
            <PostRender content={html} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full gap-6 bg-white shadow-md rounded-2xl p-6 text-center">
          <h1 className="text-6xl font-bold">
            <span className="text-blue">404</span>
          </h1>
          <h1 className="text-2xl font-bold">Post não encontrado</h1>
          <p className="text-lg">O post que você está tentando acessar não foi encontrado, talvez ele esteja privado ou indisponível.</p>
        </div>
      )}
    </div>
  );
}

export default Page;