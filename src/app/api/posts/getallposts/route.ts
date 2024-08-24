import { NextResponse } from 'next/server';
import { getPosts } from '../../../../../utils/Notion/GetAllPosts';

export async function GET() {
  try {
    const posts = await getPosts();
    console.log("Posts: ", posts);
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}