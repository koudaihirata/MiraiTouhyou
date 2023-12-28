"use client"

import Footer_election from "@/components/electionFooter/election";
import Header_Login from "@/components/header/Login";
import { useState, useEffect } from "react";
import { db } from "@/firebase/firebase";
import { DocumentData, collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import "@/app/election/vote/Confirmation/style.css"



export default function Confirmation() {
    const [ Votes, setVotes ] = useState<DocumentData[]>([]);

    useEffect(() => {                            /* ↓Cloud Firestoreのコレクションの名前 */
        const usersCollectionRef = collection(db, 'Vote');

        //コンソールで取れたデータを確認
        getDocs(usersCollectionRef).then((querySnapshot) => {
            querySnapshot.docs.forEach((doc) => console.log(doc.data()));
        });

        getDocs(usersCollectionRef).then((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            
            setVotes(data);
        });
    },[]);



    async function handleBoth(event:any) {
        event.preventDefault();
        try {
            // Votesから削除したいデータを選択
            const voteToDelete1 = Votes[0]; // Votesの最初の要素を削除する
            const voteToDelete2 = Votes[1]; // Votesの次の要素を削除する
    
            // Firestoreから該当のデータを削除
            const docRef1 = doc(db, 'Vote', voteToDelete1.id);
            const docRef2 = doc(db, 'Vote', voteToDelete2.id);
            await deleteDoc(docRef1);
            await deleteDoc(docRef2);
    
            // ローカルのstateからもデータを削除
            setVotes(Votes.filter(vote => vote.id !== voteToDelete1.id && vote.id !== voteToDelete2.id));
    
            window.history.back();
        } catch (e) {
            console.error("Error: ", e);
        }
    }
            

    return(
        <>
            <Header_Login/>
            <main>
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
                    <button onClick={() => window.location.href='/election/vote/Confirmation/Conf'}>投票する</button>
                </div>

            </main>
            <Footer_election/>
        </>
    )
}

