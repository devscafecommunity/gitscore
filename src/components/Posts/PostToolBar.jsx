import Link from 'next/link'

export default function PostToolBar({ frontMatter }) {

    return (
        <header>
            <nav>
            <Link href="/" legacyBehavior>
                <a>👈 Go back home</a>
            </Link>
            </nav>
        </header>
    )
}