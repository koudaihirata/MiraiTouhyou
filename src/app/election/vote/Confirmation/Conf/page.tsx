"use client"

import Footer_election from "@/components/electionFooter/election";
import Link from "next/link";



export default function Conf() {
    return(
        <>
            <main style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%', height: '100vh', gap: '32px'}}>
                <p style={{fontSize: '16px', textAlign: 'center'}}>投票完了しました</p>
                <Link href="/"style={{fontSize: '16px', color: '#6464FF', textDecoration: 'underline'}}>ホームに戻る</Link>
            </main>
            <Footer_election/>
        </>
    )
}
