"use client"

import "@/components/ElectoralD/ElectoralD.scss"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Profile from "./Profile/Profile";

type PrefecturesProps = {
    setRegion: (region: string) => void;
};

function Prefectures({setRegion}:PrefecturesProps) {
    return(
        <div>
            <button className="button">北海道・東北</button>
            <button className="button">関東</button>
            <button className="button">北陸・甲信越</button>
            <button className="button">東海</button>
            <button className="button" onClick={() => setRegion('Kansai')}>関西</button>
            <button className="button">四国・中国</button>
            <button className="button">九州・沖縄</button>
        </div>
    )
}


function Kansai({setRegion}:PrefecturesProps) {
    return(
        <div>
            <button onClick={() => setRegion('prefectures')} className="return" >戻る</button>
            <button className="button">京都</button>
            <button onClick={() => setRegion('Osaka')} className="button">大阪</button>
            <button className="button">滋賀</button>
            <button className="button">兵庫</button>
            <button className="button">奈良</button>
            <button className="button">和歌山</button>
            <button className="button">三重</button>
        </div>
    )
}

function Osaka({setRegion}:PrefecturesProps) {
    const profiles = [
        {
            Furigana: "タカギ カオリ",
            name: "高木 かおり",
            Work: "参議院議員",
            age: 49,
            gender: "女",
            job: "現職",
            vote: 862736,
            color: "rgb(225, 154, 0)",
            CVote:"日本維新の会",
            img:"/img/arakawa.jpg",
        },
        {
            Furigana: "マツカワ ルイ",
            name: "松川 るい",
            Work: "参議院議員",
            age: 51,
            gender: "女",
            job: "現職",
            vote: 725243,
            color:"rgb(210, 35, 25)",
            CVote:"自由民主党",
            img: "/img/tatibana.jpg",
        },
        {
            Furigana: "アサダ ヒトシ",
            name: "浅田 均",
            Work: "参議院議員",
            age: 71,
            gender: "男",
            job: "現職",
            vote: 598021,
            color: "rgb(35, 145, 255)",
            CVote:"立憲民主党",
            img: "/img/rukawa.jpg",
        },
        {
            Furigana: "ヤハタ アイ",
            name: "やはた 愛",
            Work: "タレント",
            age: 34,
            gender: "女",
            job: "新人",
            vote: 110767,
            color:"rgb(210, 35, 25)",
            CVote:"日本維新の会",
            img: "/img/tatibana.jpg",
        },
    ]

    return(
        <div className="electoralDistrictBox">
            <button onClick={() => setRegion('Kansai')} className="return" >戻る</button>
            {profiles.map((profile, index) => <Profile key={index} {...profile} />)}
        </div>
    )
}

export default function ElectoralD() {
    const [region, setRegion] = useState('prefectures');

    return(
        <>
            <section id="electoralDistrict">
                <h2>選挙区</h2>
                {region === 'prefectures' ? <Prefectures setRegion={setRegion}/> : region === 'Kansai' ? <Kansai setRegion={setRegion}/> : <Osaka setRegion={setRegion}/>}
            </section>
        </>
    )
}
