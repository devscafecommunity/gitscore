import Image from 'next/image'


export default function Header(){
    return (
        <div id={"header-container"}>
            <div id={"header-image-container"}>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={400}
                    height={400}
                    id={"header-image"}
                />
            </div>
            <div id={"header-text-container"}>
                <h1>Dev&apos;s Café</h1>
                <p>Blog oficial da comunidade.</p>
            </div>
        </div>
    )
}