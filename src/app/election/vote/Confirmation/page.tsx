"use client"

import Footer_election from "@/components/electionFooter/election";
import "@/app/election/vote/Confirmation/style.css"
import Link from "next/link";
import { useRouter } from 'next/navigation';
import BallotPaper from "@/components/BallotPaper/BallotPaper";
import { useState } from "react";



export default function Confirmation() {
    const router = useRouter();
    const [addClass, setAddClass] = useState<string[]>([]);
    const [whiteClass, setWhiteClass] = useState<string>('WhiteNone');
        
    async function handleBoth(e:any) {
        e.preventDefault();

        router.back()
    }
    async function handleVote(e:any) {
        e.preventDefault();

        setAddClass(['newVoting1', 'newVoting2']);

        setTimeout(() => {
            setWhiteClass('White');
        }, 1000);

        setTimeout(() => {
            router.push('/election/vote/Confirmation/Conf');
        }, 4000);

    }

    return(
        <>
            <main className="ConfirmationMain">
                <p>この内容でよろしいですか</p>
                <BallotPaper  extraClassName={addClass}/>
                <div className="correction">
                    <button onClick={handleBoth}>修正する</button>
                </div>
                <div className="completion">
                    <button onClick={handleVote}>投票する</button>
                </div>
            </main>
                <div className={whiteClass}>
                    <div className="electionBox">
                        <div className="line">
                            <p>・</p>
                            <p>・</p>
                            <p>・</p>
                            <p>・</p>
                        </div>
                        <p>選挙箱</p>
                        <div className="line2">
                            <p>・</p>
                            <p>・</p>
                            <p>・</p>
                            <p>・</p>
                        </div>
                    </div>
                    <div className="yellowCard"></div>
                    <div className="whiteCard"></div>
                </div>
            <Footer_election/>
        </>
    )
}
