"use client"

import "@/components/CElectoralDistrictBox/CElectoralDistrictBox.scss"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
            job: "自由民主党",
            vote: 862736,
        },
        {
            Furigana: "マツカワ ルイ",
            name: "松川 るい",
            job: "現職",
            vote: 725243,
        },
        {
            Furigana: "アサダ ヒトシ",
            name: "松川 るい",
            job: "現職",
            vote: 725243,
        },
        {
            Furigana: "マツカワ ルイ",
            name: "松川 るい",
            job: "現職",
            vote: 725243,
        },
        {
            Furigana: "マツカワ ルイ",
            name: "松川 るい",
            job: "現職",
            vote: 725243,
        },
        {
            Furigana: "マツカワ ルイ",
            name: "松川 るい",
            job: "現職",
            vote: 725243,
        },
        {
            Furigana: "マツカワ ルイ",
            name: "松川 るい",
            job: "現職",
            vote: 725243,
        },
        {
            Furigana: "マツカワ ルイ",
            name: "松川 るい",
            job: "現職",
            vote: 725243,
        },
        {
            Furigana: "マツカワ ルイ",
            name: "松川 るい",
            job: "現職",
            vote: 725243,
        },
        {
            Furigana: "マツカワ ルイ",
            name: "松川 るい",
            job: "現職",
            vote: 725243,
        },
        {
            Furigana: "マツカワ ルイ",
            name: "松川 るい",
            job: "現職",
            vote: 725243,
        },
        {
            Furigana: "マツカワ ルイ",
            name: "松川 るい",
            job: "現職",
            vote: 725243,
        },

    ]

    return(
        <div className="electoralDistrictBox">
            <button onClick={() => setRegion('Kansai')} className="return">戻る</button>
            <div>
                {profiles.map((profile, index) => <OsakaDetail key={index} {...profile} />)}

            </div>
        </div>
    )
}

type profile = {
    Furigana:string,
    name:string,
    job:string,
    vote:number,
}    
function OsakaDetail(props:profile) {

    return(
        <>
            <div className="electoralDistrictWrap">
                <div className="electoralDistrict">
                    <Image src="/img/arakawa.jpg" alt="新川" width={80} height={100}/>
                    <a href="/election/vote/number/one" className="profile">
                        <div className="profileName">
                            <p>{props.Furigana}</p>
                            <h4>{props.name}</h4>
                        </div>
                        <div className="profileParty"><p style={{color:"rgb(210, 35, 25)"}}>{props.job}</p></div>
                    </a>
                </div>
                <div className="electoralDistrictVote">
                    <p>{props.vote}票</p>
                </div>
            </div>

        </>
    )
}

export default function CElectoralDistrictBox() {
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
