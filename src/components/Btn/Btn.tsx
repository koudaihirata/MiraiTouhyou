import Link from "next/link"
import "@/components/Btn/style.css"

export default function Btn({ label }: { label: string }) {
    return(
        <>
            <p>
                <button className="Btn">
                    {label}
                </button>
            </p>
        </>
    )
}
