import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'


// Components
import PostHeader from '../../components/Posts/PostHeader'
import PostRender from '../../components/Posts/PostRender'
import PostToolBar from '../../components/Posts/PostToolBar'
import GoBack from '../../components/Posts/GoBack'

export default function PostPage({ source, frontMatter }) {
  return (
    <div>
      <PostToolBar frontMatter={frontMatter} />
      <PostHeader frontMatter={frontMatter} />
      <PostRender source={source} />
      <GoBack />
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths()
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
