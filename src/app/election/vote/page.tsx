"use client"

import Header_main from "@/components/header/main"
import "@/app/election/vote/style.css"
import Link from "next/link"
import { type } from "os"
import Image from "next/image"
import { useState } from "react"
import React from "react"
import Footer_election from "@/components/electionFooter/election"

type CandidateVoteProps = {
    img:string,
    Furigana:string,
    name:string,
    Profession:string,
    age:Number,
    gender:string,
    work:string,
    party:string,
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

export function VoteBtn({
    onClick,
}:{onClick?:() => void, selected?:boolean}) {
    const [color, setColor] = useState('#fff');
    const [selected, setSelected] = useState(false);

    React.useEffect(() => {
        if (selected) {
            setColor('#fff')
        }
        else{
            setColor('#FF1414')
        }
    },[selected])

    const styles = {
        backgroundColor: color,
        width: '30px',
        height: '30px',
        borderRadius: '50%'
    }

    const handleClick = () => {
        setSelected(!selected);
        onClick && onClick();
    }

    return(
        <div className="VoteBtn">
            <button style={styles} onClick={handleClick}></button>
        </div>
    )
}

export function CandidateVote(props:CandidateVoteProps) {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
    }

    return(
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
                <VoteBtn onClick={handleClick} selected={selected}/>
            </div>
        </div>
    )
}


export default function Vote() {
    return(
    <>
        <Header_main/>
        <main>
            <div>
                <h2>第27回参議院議員通常選挙</h2>
                <h3>選挙区投票</h3>
                <div className="voteConstant">
                    <p>定数</p>
                    <p><span>4</span>/7</p>
                </div>
                <section className="electoralDistrictBox">
                    {CandidateVotes.map((CandidateVotes, index) => {
                        return <CandidateVote key={index} {...CandidateVotes} />
                    })}
                </section>
            </div>
            <div>
                <h3>比例代表選挙</h3>

            </div>
        </main>
        <Footer_election/>
    </>
    )
}