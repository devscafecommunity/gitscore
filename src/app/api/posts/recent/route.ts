import { NextResponse } from 'next/server';
import { getPosts } from '../../../../../utils/Notion/GetAllPosts';

/*
Recebe todos os posts do blog usando getPosts();
retorna:

[
  {
    "id": "80fcbc66-99de-4ba5-845f-d1884a50c563",
    "title": "Clean Code com Princípios S.O.L.I.D",
    "tags": [
      "Test"
    ],
    "description": "Text desc",
    "cover": "https://i.imgur.com/3ToN0IJ.png",
    "createdDate": "2024-08-09T19:40:00.000Z",
    "lastEdited": "2024-08-15T20:35:00.000Z",
    "url": "/posts/conceitos-solid-cleancode",
    "public": true,
    "slug": {
      "content": "conceitos-solid-cleancode",
      "link": null
    }
  }
]

e retorna basicamente o mesmo objeto, mas ordenado por ultima edição.
*/
export async function GET() {
    try {
        const posts = await getPosts();
        return NextResponse.json(posts);
    }
    catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}