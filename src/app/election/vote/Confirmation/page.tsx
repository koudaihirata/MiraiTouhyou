"use client"


import Footer_Login from "@/components/footer/Login";
import Header_Login from "@/components/header/Login";
import { useSearchParams } from "next/navigation";
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Vote from "../page";


function ConfirmationPage({party}:{party:string}) {
    console.log(party);


    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const candidate = searchParams.get('Candidate');
    const partyVote = searchParams.get('PartyVote');

    return (
        <div>
            <h1>Confirmation Page</h1>
            <p>Candidate: {candidate}</p>
            {/* <p>Party Vote: {party.parties}</p> */}
        </div>
    );
}



export default function Confirmation() {
    return(
        <>
            <Header_Login/>
            <main>
                <Router>
                    <ConfirmationPage/>
                </Router>
            </main>
            <Footer_Login/>
        </>
    )
}

