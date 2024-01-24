"use client"

import dynamic from 'next/dynamic';
import Footer_election from "@/components/electionFooter/election"
import Header_Login from "@/components/header/Login"
import { BrowserRouter as Router } from "react-router-dom";

const Vote = dynamic(() => import('@/components/Vote/Vote'), { ssr: false });

export default function VoteMain() {
    return(
        <>
            <Router>
                <Vote/>
            </Router>
            <Footer_election/>
        </>
    )
}
