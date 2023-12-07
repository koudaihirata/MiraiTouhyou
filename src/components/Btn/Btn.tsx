import Link from "next/link"
import "@/components/Btn/style.css"

export default function Btn({ label }: { label: string }) {
    return(
        <>
            <p>
                <Link href="#" className="Btn">
                    {label}
                </Link>
            </p>
        </>
    )
}
