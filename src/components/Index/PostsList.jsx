import Link from 'next/link'

export default function PostsList({ posts }) {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.filePath} >
            <Link
              as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
              href={`/posts/[slug]`}
            >
              {post.data.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}