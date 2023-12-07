"use client"

import Btn from "@/components/Btn/Btn"
import Footer_main from "@/components/footer/main"
import Header_Login from "@/components/header/Login"
import Header_main from "@/components/header/main"
import Image from "next/image"
import "@/app/election/style.css"
import Link from "next/link"



type CandidateProps = {
    name:string,
    party:string,
    // now: "新" | "現" | "元",
    now:string,
    num:Number,
}
const persons = [
    {
        name: "平田広大",
        party:"共産",
        now:"新",
        num:101212,
    },
    {
        name: "五十嵐太郎",
        party:"参政",
        now:"新",
        num:85187,
    },
    {
        name: "新川るい",
        party:"自民",
        now:"元",
        num:50065,
    },
    {
        name: "辛口池流",
        party:"N党",
        now:"現",
        num:10042,
    },
    {
        name: "山口煙管",
        party:"無",
        now:"新",
        num:5432,
    },      
]
export function Candidate(props:CandidateProps) {
    return(
        <div className="candidate">
            <Image src='/img/profile.svg' alt="Icon" width={24} height={24}/>
            <p>{props.name}</p>
            <div><p>{props.party}</p></div>
            <div><p>{props.now}</p></div>
            <p>{props.num.toString()}</p>
        </div>
    )
}





export default function Election() {
    return(
        <>
            <Header_Login/>
            <main>
                <div style={{ width: '100vw', height: '200px', position: 'relative' }}>
                    <Image src="/img/electionView.svg" alt="第27回参議院議員通常選挙" layout="fill" objectFit="contain"/>
                </div>
                <div className="pseudoVoting">
                    <h2>擬似投票期間</h2>
                    <p>5月1日 ~ 5月30日まで</p>
                    <h2>擬似投票結果</h2>
                    <p>6月1日　10時発表</p>
                </div>
                <div className="componentsBtn"><Btn label="投票する"/></div>
                <section className="CurrentSituation">
                    <div className="rank">
                        <div className="update">
                            <p>13:00</p>
                        </div>
                        <h3>現在の順位</h3>
                            {persons.map((person,index) =>{
                            return <Candidate key={index} {...person} />
                            })}
                    </div>
                </section>
                <div className="componentsBtn"><Btn label="過去の結果を見る"/></div>
            </main>
            <Footer_main/>
        </>
    )
}