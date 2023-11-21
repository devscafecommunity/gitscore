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
                <h1 style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Dev&apos;s Café</h1>
                {/* <p>Blog oficial da comunidade.</p> */}
                <span
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: "100",
                        color: "var(--text-secondary)",
                        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)"
                    }}>
                        <p>Blog oficial da comunidade.</p>
                </span>
                
            </div>
        </div>
    )
}