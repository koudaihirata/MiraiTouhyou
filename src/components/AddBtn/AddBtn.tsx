import "@/components/AddBtn/AddBtn.scss"
import Link from "next/link"

export default function AddBtn() {
    return(
        <>
            <p className="addBtn"><Link href="#" className="Addlink">＋</Link></p>
        </>
    )
}