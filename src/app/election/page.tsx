"use client"

import Btn from "@/components/Btn/Btn"
import Image from "next/image"
import "@/app/election/style.css"
import Link from "next/link"
import { type } from "os"
import Footer_election from "@/components/electionFooter/election"
import Header_Login from "@/components/header/Login"



type CandidateProps = {
    name:string,
    party:string,
    // now: "新" | "現" | "元",
    now:string,
    num:Number,
    color:string,
}
type PartyProps = {
    name:string,
    num:Number,
    color:string,
}

const persons = [
    {
        name: "平田広大",
        party:"共産",
        now:"新",
        num:101212,
        color:"#B0A200",
    },
    {
        name: "五十嵐太郎",
        party:"参政",
        now:"新",
        num:85187,
        color:"#F39800",
    },
    {
        name: "新川るい",
        party:"自民",
        now:"元",
        num:50065,
        color:"#C51442",
    },
    {
        name: "辛口池流",
        party:"N党",
        now:"現",
        num:10042,
        color:"#657F10",
    },
    // {
    //     name: "山口煙管",
    //     party:"無",
    //     now:"新",
    //     num:5432,
    //     color:"#D9D9D9",
    // },      
]
const parties = [
    {
        name:"自民",
        num:Number("1825"),
        color:"rgb(210, 35, 25)",
    },
    {
        name:"維新",
        num:Number("784"),
        color:"rgb(225, 154, 0)",
    },
    {
        name:"立民",
        num:Number("677"),
        color:"rgb(35, 145, 255)",
    },
    {
        name:"公明",
        num:Number("618"),
        color:"rgb(235, 97, 190)",
    },
    {
        name:"共産",
        num:Number("361"),
        color:"rgb(110, 65, 225)",
    },
    {
        name:"国民",
        num:Number("315"),
        color:"rgb(0, 16, 165)",
    },
    {
        name:"れ新",
        num:Number("231"),
        color:"rgb(240, 160, 167)",
    },
    {
        name:"参政",
        num:Number("176"),
        color:"rgb(235, 100, 10)",
    },
    {
        name:"社民",
        num:Number("125"),
        color:"rgb(5, 85, 90)",
    },
    {
        name:"N党",
        num:Number("125"),
        color:"rgb(182, 200, 27)",
    },
    {
        name:"ごぼ",
        num:Number("19"),
        color:"rgb(35, 70, 0)",
    },
    {
        name:"幸福",
        num:Number("14"),
        color:"rgb(150, 150, 250)",
    },
    {
        name:"第一",
        num:Number("10"),
        color:"rgb(170, 130, 75)",
    },
    {
        name:"くに",
        num:Number("7"),
        color:"rgb(180, 110, 90)",
    },
    {
        name:"新風",
        num:Number("6"),
        color:"rgb(100, 50, 10)",
    },
]

export function Candidate(props:CandidateProps) {
    return(
        <div className="candidate">
            <Image src='/img/profile.svg' alt="Icon" width={24} height={24}/>
            <p className="candidateName">{props.name}</p>
            <div style={{backgroundColor:props.color}} className="candidateParty"><p>{props.party}</p></div>
            <div className="candidateNow"><p>{props.now}</p></div>
            <p>{props.num.toString()}票</p>
        </div>
    )
}
export function Party(props:PartyProps) {
    return(
        <div className="party" style={{backgroundColor:props.color}}>
            <div className="partyName"><p>{props.name}</p></div>
            <div className="partyNum"><p>{props.num.toString()}</p></div>
        </div>
    )
}






export default function Election() {
    return(
        <>
            <Header_Login/>
            <main className="mb-36">
                <div style={{ width: '100vw', height: '200px', position: 'relative', backgroundColor: '#68C1F2'}}>
                    <Image src="/img/electionView.svg" alt="第27回参議院議員通常選挙" layout="fill" objectFit="contain"/>
                </div>
                <div className="pseudoVoting">
                    <h2>擬似投票期間</h2>
                    <p>5月1日 ~ 5月30日まで</p>
                    <h2>擬似投票結果</h2>
                    <p>6月1日　10時発表</p>
                </div>
                <div className="componentsBtn">
                    <a href="/election/vote" className="voteBtn">
                        <Btn label="投票する" />
                    </a>
                </div>
                <section className="CurrentSituation">
                    <div className="rank">
                        <div className="update">
                            <Image src='/img/reload.svg' alt="リロード" width={10} height={10}/>
                            <p>13:00</p>
                        </div>
                        <h3>現在の順位</h3>
                        <div className="candidateBox">
                            {persons.map((person,index) =>{
                                return <Candidate key={index} {...person} />
                            })}
                        </div>
                        <div className="candidate Candidate">
                            <Image src='/img/profile.svg' alt="Icon" width={24} height={24}/>
                            <p className="candidateName">山口煙管</p>
                            <div className="candidateParty"><p>無</p></div>
                            <div className="candidateNow"><p>新</p></div>
                            <p>5432票</p>
                        </div>
                        <div className="PartyBox">
                            {parties.map((parties,index) => {
                                return <Party key={index} {...parties}/>
                            })}
                            <p>（万）</p>
                        </div>
                        <p>※選挙情報に誤りがあった場合、恐れ入りますが<Link href="#">こちら</Link>よりお問合せください。</p>
                        <p>
                            【候補者・政治家の方へ】<br />
                            ※政治家・候補者情報の掲載や変更等は無料で承っておりますので、<br />
                            <Link href="#">こちらをご確認ください。</Link>
                        </p>
                    </div>
                </section>
                <div className="componentsBtn">
                    <a href="/election/pastResults" className="voteBtn">
                        <Btn label="過去の結果を見る"/>
                    </a>
                </div>
            </main>
            <Footer_election/>
        </>
    )
}