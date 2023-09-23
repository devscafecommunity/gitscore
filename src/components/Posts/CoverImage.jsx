import Image from 'next/image'
import Link from 'next/link'

export default function CoverImage({ title, src }) {

    return (
        <div className="cover-image">
            {/* <Image
                src={src}
                alt={`Cover Image for ${title}`}
                width={2000}
                height={400}
                className="cover-image"
            /> */}
        </div>
    )
}