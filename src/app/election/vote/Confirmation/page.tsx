"use client"


import Footer_Login from "@/components/footer/Login";
import Header_Login from "@/components/header/Login";
import { useSearchParams } from "next/navigation";


export default function Confirmation() {
    const searchParams = useSearchParams();
    const Candidate = searchParams.get('Candidate')
    const PartyVote = searchParams.get('PartyVote')

    return(
        <>
            <Header_Login/>
            <main>
                <p>{Candidate}</p>
                <p>{PartyVote}</p>
            </main>
            <Footer_Login/>
        </>
    )
}