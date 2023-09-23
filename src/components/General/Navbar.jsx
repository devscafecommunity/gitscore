import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    let paths = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/about',
            name: 'About'
        },
        {
            path: '/contact',
            name: 'Contact'
        }
    ]

    return (
        <nav id={"navbar"}>
            <div>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    id={"navbar-logo"}
                />
            </div>
            <div>
                <ul id={"navbar-list"}>
                    {paths.map((path) => (
                        <li key={path.path}>
                            <Link href={path.path}>
                                <h2>{path.name}</h2>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}