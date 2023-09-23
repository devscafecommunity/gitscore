import React from 'react'

export default function PostHeader({ frontMatter }) {
    return (
        <div className="post-header">
            <h1>{frontMatter.title}</h1>
            {frontMatter.description && (
            <p className="description">{frontMatter.description}</p>
            )}
        </div>
    )
}