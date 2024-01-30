import "@/components/Btn/style.css"

export default function Btn({ label }: { label: string }) {
    return(
        <>
            <div className="aroundTheBtn">
                <button className="Btn">
                    {label}
                </button>
            </div>
        </>
    )
}
