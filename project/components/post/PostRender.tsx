/*
Recive html content from props and render it with tailwindcss/typography
*/ 
export default function PostRender({ content }: { content: string }) {
    return <div className="prose prose-lg  max-w-none white:prose-neutral
    prose-hr:{
        color: var(--color-neutral-300);
    }
    " dangerouslySetInnerHTML={{ __html: content }}  />
}