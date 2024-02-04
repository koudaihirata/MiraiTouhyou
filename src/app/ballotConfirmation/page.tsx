"use client"

import BallotPaper from "@/components/BallotPaper/BallotPaper";
import "@/app/election/vote/Confirmation/style.css"
import Footer_election from "@/components/electionFooter/election";
import Link from "next/link";


export default function ballotConfirmation() {
    return(
        <>
            <main className="ConfirmationMain">
                <p>こちらの内容で投票しています。</p>
                <BallotPaper/>
                <div className="correction">
                    <Link href={"/"}>
                        <button>ホームに戻る</button>
                    </Link>
                </div>
            </main>
            <Footer_election/>
        </>
    )
}