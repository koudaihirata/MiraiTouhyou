"use client"

import Footer_election from "@/components/electionFooter/election"
import Inquiry from "@/components/inquiry/inquiry"
import "@/app/election/AllResults/style.scss"



export default function AllResults() {
    return(
        <>
            <main className="AllResultsMain">




                <Inquiry/>
            </main>
            <Footer_election/>
        </>
    )
}