"use client"

import Footer_election from "@/components/electionFooter/election";
import { useState, useEffect } from "react";
import { auth, db } from "@/firebase/firebase";
import { DocumentData, collection, getDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import "@/app/election/vote/Confirmation/style.css"
import Link from "next/link";
import { useRouter } from 'next/navigation';



export default function Confirmation() {
    const router = useRouter();

    const [ Votes, setVotes ] = useState<DocumentData[]>([]);

    useEffect (() => {
        const fetchData = async () => {
            const user = auth.currentUser;
            if (user) {
                const voteRef = collection(db, 'Vote');
                const specificDocRef = doc(voteRef, `${user.uid}`);
        
                const docSnapshot = await getDoc(specificDocRef);
                if(docSnapshot.exists()) {
                    const data = docSnapshot.data();
                    setVotes(prevVotes => [...prevVotes, data]);
                }
            }
        };
        fetchData();
    },[]);
        
    async function handleBoth(e:any) {
        e.preventDefault();

        router.push("/")
    }

    return(
        <>
            <main className="ConfirmationMain">
                <p>この内容でよろしいですか</p>
                <div>
                    <div className="ballotPaper">
                        <div className="ballotPaperName">
                            <div className="CandidateNomination">
                                <p>候補者指名</p>
                            </div>
                            <div className="CandidateNominationName">
                                {Votes.map((Vote) => (
                                    <h2 key={Vote.id}>{Vote.name}</h2>
                                ))}
                            </div>
                        </div>
                        <div className="ElectionName">
                            <p>第二十七回 参議院</p>
                            <h3><span>選挙区</span>選出議員選挙投票</h3>
                        </div>
                    </div>

                    <div className="ballotPaper2">
                        <div className="ballotPaperName">
                            <div className="CandidateNomination">
                                <p>候補党指名</p>
                            </div>
                            <div className="CandidateNominationName">
                                {Votes.map((Vote) => (
                                    <h2 key={Vote.id}>{Vote.party}</h2>
                                ))}
                            </div>
                        </div>
                        <div className="ElectionName">
                            <p>第二十七回 参議院</p>
                            <h3><span>比例代表</span>選出議員選挙投票</h3>
                        </div>
                    </div>
                </div>
                <div className="correction">
                    <button onClick={handleBoth}>修正する</button>
                </div>
                <div className="completion">
                    <Link href={"/"}>
                        <button>投票する</button>
                    </Link>
                </div>

            </main>
            <Footer_election/>
        </>
    )
}

