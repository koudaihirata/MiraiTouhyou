"use client"

import Footer_election from "@/components/electionFooter/election";
import "@/app/election/vote/Confirmation/style.css"
import Link from "next/link";
import { useRouter } from 'next/navigation';
import BallotPaper from "@/components/BallotPaper/BallotPaper";



export default function Confirmation() {
    const router = useRouter();
        
    async function handleBoth(e:any) {
        e.preventDefault();

        router.back()
    }

    return(
        <>
            <main className="ConfirmationMain">
                <p>この内容でよろしいですか</p>
                <BallotPaper/>
                <div className="correction">
                    <button onClick={handleBoth}>修正する</button>
                </div>
                <div className="completion">
                    <Link href={"/election/vote/Confirmation/Conf"}>
                        <button>投票する</button>
                    </Link>
                </div>
            </main>
            <Footer_election/>
        </>
    )
}

