"use client"

import Footer_election from "@/components/electionFooter/election";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";


export default function Conf() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, [router]);
    

    return(
        <>
            <main style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%', height: '100vh', gap: '32px'}}>
                <p style={{fontSize: '16px', textAlign: 'center'}}>投票完了しました</p>
                <p style={{fontSize: '16px', color: '#6464FF'}}>3秒後に戻ります</p>
            </main>
            <Footer_election/>
        </>
    )
}
