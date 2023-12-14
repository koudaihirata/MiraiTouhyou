"use client"

import "@/app/election/vote/style.css"
import Link from "next/link"
import { type } from "os"
import Image from "next/image"
import { useState } from "react"
import React from "react"
import Footer_election from "@/components/electionFooter/election"
import Header_Login from "@/components/header/Login"

type CandidateVoteProps = {
    img:string,
    Furigana:string,
    name:string,
    Profession:string,
    age:Number,
    gender:string,
    work:string,
    party:string,
    onClick: () => void,
    selected: boolean,
}
type PartyVoteProps = {
    parties:string,
    onClick: () => void,
    selected: boolean,

}

const CandidateVotes = [
    {
        img:"/img/arakawa.jpg",
        Furigana: "アラカワ ルイ",
        name: "新川 るい",
        Profession: "参議院議員",
        age: 51,
        gender: "女",
        work: "現職",
        party: "自由民主党"
    },
    {
        img:"/img/igarasi.jpg",
        Furigana: "イガラシ タロウ",
        name: "五十嵐 太郎",
        Profession: "団体役員",
        age: 43,
        gender: "男",
        work: "現職",
        party: "参政党"
    },
    {
        img:"/img/karakuti.jpg",
        Furigana: "カラクチ イケル",
        name: "辛口 池流",
        Profession: "無職",
        age: 57,
        gender: "男",
        work: "新人",
        party: "NHK党"
    },
    {
        img:"/img/tatibana.jpg",
        Furigana: "タチバナ ヤヨイ",
        name: "橘 弥生",
        Profession: "政党役員",
        age: 67,
        gender: "女",
        work: "現職",
        party: "立憲民主党"
    },
    {
        img:"/img/hirata.jpg",
        Furigana: "ヒラタ コウダイ",
        name: "平田 広大",
        Profession: "参議院議員",
        age: 41,
        gender: "男",
        work: "現職",
        party: "日本共産党"
    },
    {
        img:"/img/yamaguti.jpg",
        Furigana: "ヤマグチ キセル",
        name: "山口 煙管",
        Profession: "無職",
        age: 68,
        gender: "男",
        work: "新人",
        party: "無所属"
    },
    {
        img:"/img/rukawa.jpg",
        Furigana: "ルカワ カエデ",
        name: "流川 楓",
        Profession: "自営業",
        age: 38,
        gender: "男",
        work: "新人",
        party: "日本維新の会"
    },

]
const PartyVotes = [
    {
        parties:"維新政党・新風",
    },
    {
        parties:"幸福実現党",
    },
    {
        parties:"公明党",
    },
    {
        parties:"国民民主党",
    },
    {
        parties:"参政党",
    },
    {
        parties:"新党くにもり",
    },
    {
        parties:"自由民主党",
    },
    {
        parties:"日本維新の会",
    },
    {
        parties:"日本共産党",
    },
    {
        parties:"日本第一党",
    },
    {
        parties:"ごぼうの党",
    },
    {
        parties:"れいわ新選組",
    },
    {
        parties:"社会民主党",
    },
    {
        parties:"立憲民主党",
    },
    {
        parties:"ＮＨＫ党",
    },
]

type VoteBtnProps = {
    onClick: () => void;
    selected: boolean;
};

export function CandidateVoteBtn({ onClick, selected }:VoteBtnProps) {
    const styles = {
    backgroundColor: selected ? '#FF1414' : '#fff',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    }
    return (
    <div className="VoteBtn">
        <button style={styles} onClick={onClick}></button>
    </div>
    )
}
export function PartyVoteBtn({ onClick, selected }:VoteBtnProps) {
    const styles = {
        backgroundColor: selected ? '#ff1414' : '#fff',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
    }
    return(
        <div className="partyBtn">
            <button style={styles} onClick={onClick}></button>
        </div>
    )
}

export function CandidateVote(props:CandidateVoteProps) {
    return (
    <div className="electoralDistrict">
        <Image src={props.img} alt="新川" width={80} height={100}/>
        <Link href="#" className="profile">
            <div className="profileName">
                <p>{props.Furigana}</p>
                <h4>{props.name}</h4>
            </div>
            <div className="profileWork">
                <p>{props.Profession}</p>
                <p>{props.age.toString()}歳（{props.gender}）［{props.work}］</p>
            </div>
            <div className="profileParty">{props.party}</div>
        </Link>
        <div className="VoteBtnWarp">
            <CandidateVoteBtn onClick={props.onClick} selected={props.selected}/>
        </div>
    </div>
    )
}

export function PartyVote(props:PartyVoteProps) {
    return(
        <div className="proportionalRepresentation">
            <div className="partyName">
                <p>{props.parties}</p>
            </div>
            <div className="partyBtnWarp">
                <PartyVoteBtn onClick={props.onClick} selected={props.selected}/>
            </div>
        </div>
    )
}


export default function Vote(props:PartyVoteProps,) {
    console.log(props.parties); 

    const [selectedCandidate, setSelectedCandidate] = useState<Number|null>(null);
    const [PartyVoteDate, setPartyVoteDate] = useState<Number|null>(null);

    return (
    <>
        <Header_Login/>
        <main>
            <div>
                <h2>第27回参議院議員通常選挙</h2>
                <h3>選挙区投票</h3>
                <div className="voteConstant">
                    <p>定数</p>
                    <p><span>4</span>/7</p>
                </div>
                <section className="electoralDistrictBox">
                    {CandidateVotes.map((candidate, index) => (
                    <CandidateVote
                    {...candidate}
                    key={index}
                    selected={selectedCandidate === index}
                    onClick={() => setSelectedCandidate(index)}
                    />
                    ))}
                </section>
            </div>
            <div className="proportionalRepresentationWarp">
                <h3>比例代表選挙</h3>
                <section className="proportionalRepresentationBox">
                    {PartyVotes.map((candidates, index) => (
                        <PartyVote
                        {...candidates}
                        key={index}
                        selected={PartyVoteDate === index}
                        onClick={() => setPartyVoteDate(index)}
                        />
                    ))}
                </section>
                <div>
                    <p>※選挙情報に誤りがあった場合、恐れ入りますが<Link href="#">こちら</Link>よりお問合せください。</p>
                    <p>
                        【候補者・政治家の方へ】<br />
                        ※政治家・候補者情報の掲載や変更等は無料で承っておりますので、<br />
                        <Link href="#">こちらをご確認ください。</Link>
                    </p>
                </div>
            </div>
            <Link href={`/election/vote/Confirmation?Candidate=${props.parties}`}>投票する</Link>
        </main>
        <Footer_election/>
    </>
    )
}
