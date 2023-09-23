import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'
import Head from 'next/head'

const components = {
    a: Link,
    Head,
}

export default function PostRender({ source }) {
    return (
        <main>
            <MDXRemote {...source} components={components} />
        </main>
    )
}