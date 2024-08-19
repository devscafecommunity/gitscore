import Image from "next/image";
import Head from "next/head";

import ListPosts from "../../components/index/ListPosts";
import Header from "../../components/general/Header";
import type { Metadata } from 'next';

export const metadata: Metadata = 
{
  title: "Dev's Café Blog",
  description: "Blog oficial da comunidade Dev's Café, aqui você encontra posts sobre tecnologia, programação, desenvolvimento de software e muito mais!",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-6">
      <Head>
        <title>Dev&apos;s Café Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Blog oficial da comunidade Dev's Café, aqui você encontra posts sobre tecnologia, programação, desenvolvimento de software e muito mais!" />
        <meta property="og:title" content="Dev's Café Blog" />
      </Head>
      <div className="flex flex-col items-center justify-center py-2 gap-4 p-6">
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center py-2 gap-4 p-6">
        <ListPosts />
      </div>
    </div>
  );
}
