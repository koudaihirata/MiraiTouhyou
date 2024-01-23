"use client"

import Vote from "@/components/Vote/Vote";
import Footer_election from "@/components/electionFooter/election"
import Header_Login from "@/components/header/Login"
import { BrowserRouter as Router } from "react-router-dom";

export default function VoteMain() {
    return(
        <>
            <Header_Login/>
            <Router>
                <Vote/>
            </Router>
            <Footer_election/>
        </>
    )
}