"use client"

import Footer_election from "@/components/electionFooter/election";
import Header_Login from "@/components/header/Login";
import { useState, useEffect } from "react";
import { DocumentData, collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useRouter } from 'next/navigation';
import Link from "next/link";



export default function Conf() {
    const [ Votes, setVotes ] = useState<DocumentData[]>([]);
    const router = useRouter()

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

        router.push("/")
    } catch (e) {
        console.error("Error: ", e);
    }
}


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
