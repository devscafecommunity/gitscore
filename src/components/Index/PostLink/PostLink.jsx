import Link from "next/link";
import Image from "next/image";

// Styles
import style from "./PostLink.module.css"

function PostLink ({ data, filePath }){
    return (
      <div className={style.container}>
        <Link href={`/posts/[slug]`} as={`/posts/${filePath.replace(/\.mdx?$/, "")}`}>
          <div 
            id={"post-list-object"}
            className={style.post}
          >
            <div>
              <Image src={data.cover} 
                width={150} height={150} 
                id={"post-list-image"}
              />
            </div>
            <div>
              <div className={style.title}>{data.title}</div>
              <div><p>{data.description}</p></div>
              <div><p>{data.date}</p></div>
              <div><p>by {data.author}</p></div>
            </div>
          </div>
        </Link>
      </div>
    )
}

export default PostLink;