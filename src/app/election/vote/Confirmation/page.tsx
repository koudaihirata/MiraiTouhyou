"use client"

import Footer_election from "@/components/electionFooter/election";
import "@/app/election/vote/Confirmation/style.css"
import Link from "next/link";
import { useRouter } from 'next/navigation';
import BallotPaper from "@/components/BallotPaper/BallotPaper";
import { useState } from "react";



export default function Confirmation() {
    const router = useRouter();
    const [addClass, setAddClass] = useState(false);
        
    async function handleBoth(e:any) {
        e.preventDefault();

        router.back()
    }
    async function handleVote(e:any) {
        e.preventDefault();

        setAddClass(true);

        // router.push("/election/vote/Confirmation/Conf")
    }

    return(
        <>
            <main className="ConfirmationMain">
                <p>この内容でよろしいですか</p>
                <BallotPaper  extraClassName={addClass ? 'newVoting' : ''}/>
                <div className="correction">
                    <button onClick={handleBoth}>修正する</button>
                </div>
                <div className="completion">
                    <button onClick={handleVote}>投票する</button>
                </div>
            </main>
            <Footer_election/>
        </>
    )
}

