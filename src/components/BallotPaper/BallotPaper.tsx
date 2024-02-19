import { useState, useEffect } from "react";
import { auth, db } from "@/firebase/firebase";
import { DocumentData, collection, getDoc } from "firebase/firestore";
import { doc,} from "firebase/firestore";



export default function BallotPaper({extraClassName}: {extraClassName: string[]}) {
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

    return(
    <div>
        <div className={`ballotPaper ${extraClassName[0]}`}>
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
        <div className={`ballotPaper2 ${extraClassName[1]}`}>
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

    )
}