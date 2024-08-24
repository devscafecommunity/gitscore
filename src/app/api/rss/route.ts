import { NextResponse } from 'next/server';
import { getPosts } from '../../../../utils/Notion/GetAllPosts';
/*
Rss feed formato:

<rss version="2.0">
  <channel>
    <title>My blog</title>
    <link>https://example.com</link>
    <description>My blog posts</description>
    <item>
      <title>Post title</title>
      <link>https://devscafe.pt/posts/slug</link>
      <description>Post description</description>
      <author>Author name</author>
      <pubDate>Mon, 19 Jul 2021 00:00:00 GMT</pubDate>
    </item>
  </channel>
</rss>

getPosts() retorna:
[
  {
    "id": "80fcbc66-99de-4ba5-845f-d1884a50c563",
    "title": "Clean Code com Princípios S.O.L.I.D",
    "tags": [
      "S.O.L.I.D",
      "Clean code",
      "Boas Praticas"
    ],
    "description": "Quando se trata de escrever código de qualidade, existem várias diretrizes e princípios que podem nos ajudar a alcançar esse objetivo. ",
    "cover": "https://i.imgur.com/3ToN0IJ.png",
    "author": "Pedro k. Jesus",
    "authorAvatar": "https://i.imgur.com/cEY3ysC.png",
    "authorIndividualId": "lyeezinho",
    "createdDate": "2024-08-09T19:40:00.000Z",
    "lastEdited": "2024-08-16T20:12:00.000Z",
    "url": "/posts/conceitos-solid-cleancode",
    "public": true,
    "slug": {
      "content": "conceitos-solid-cleancode",
      "link": null
    }
  },
  ...
]

transforma em um xml e retorna
*/ 
function generateRss(posts: any[]) {
    const items = posts.map((post) => `
        <item>
            <title>${post.title}</title>
            <link>https://devscafe.pt${post.url}</link>
            <description>${post.description}</description>
            <author>${post.author}</author>
            <tags>${post.tags.join(', ')}</tags>
            <cover>${post.cover}</cover>
            <createdDate>${new Date(post.createdDate).toUTCString()}</createdDate>
            <authorUrl>https://blog.devscafe.pt/author/${post.authorIndividualId}</authorUrl>
            <pubDate>${new Date(post.lastEdited).toUTCString()}</pubDate>
        </item>
    `).join('');

    return `
        <rss version="2.0">
            <channel>
                <title>DevsCafe</title>
                <link>https://blog.devscafe.pt</link>
                <description>DevsCafe posts</description>
                ${items}
            </channel>
        </rss>
    `;
}

export async function GET() {
    try {
        const posts = await getPosts();
        const rss = generateRss(posts);

        // Return the RSS feed as XML
        return new Response(rss, {
            headers: {
                'Content-Type': 'application/xml',
            },
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}
