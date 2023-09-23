import Link from 'next/link'

export default function PostToolBar({ frontMatter }) {

    return (
        <header>
            <nav>
                <Link href="/" legacyBehavior>
                    <a>👈 Retornar para a página inicial </a>
                </Link>
            </nav>
        </header>
    )
}