import Link from "next/link";

export default function GoBack() {
    return (
        <div>
            <Link href="/" legacyBehavior>
                <a>👈 Voltar. </a>
            </Link>
        </div>
    )
}