"use client"

import Footer_election from "@/components/electionFooter/election";
import Header_Login from "@/components/header/Login";
import Image from "next/image";
import "@/app/election/vote/one/style.css"



export default function one(){
    return(
        <>
            <Header_Login/>
            <main>
                <button onClick={() => window.history.back()}>戻る</button>
                <div className="name">
                    <Image src="/img/arakawa.jpg" alt="新川" width={80} height={100}/>
                    <p>アラカワ　ルイ</p>
                    <h2>新川　るい</h2>
                    <p>自由民主党</p>
                </div>
                <div className="Profession">
                    <p>職業</p>
                    <p>参議院議員</p>
                </div>
                <div className="birth">
                    <p>生年月日</p>
                    <p>1972年　7月3日</p>
                </div>
                <p>公約</p>
                <div className="comment">
                    <p></p>
                </div>
            </main>
            <Footer_election/>
        </>
    )
}