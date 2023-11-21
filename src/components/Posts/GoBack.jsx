import Link from "next/link";

export default function GoBack() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                maxWidth: "800px",
                padding: "0 1rem",
                gap: "1rem",
            }}
        >
            {/* <Link href="/" legacyBehavior>
                <a>👈 Voltar. </a>
            </Link> */}
            <div style={{ display: "flex", flexDirection: "row" }}>
            <Link href="/">
                {/* <a>👈 Voltar. </a> */}
                <p style={{color: "blue", cursor: "pointer"}}>👈 Voltar.</p>
            </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
            {/* Scroll up */}
                <p style={{color: "blue", cursor: "pointer"}} onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>👆 scroll</p>
            </div>
        </div>
    )
}