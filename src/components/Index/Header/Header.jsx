import Image from 'next/image'
import style from "./header.module.css";

export default function Header(){
    return (
        <div id={style["header-container"]}>
            <div id={style["header-image-container"]}>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={400}
                    height={400}
                    id={style["header-image"]}
                />
            </div>
            <div id={style["header-text-container"]}>
                <h1 style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Dev&apos;s Café</h1>
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