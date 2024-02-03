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
        <div className="electoralDistrictBox">
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
        <div className="electoralDistrictBox">
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
    const comparisonProfiles = [
        {
            Link:"/election/vote/number/two",
            Furigana: "イガラシ タロウ",
            name: "五十嵐 太郎",
            job: "参政党",
            vote: "725,243",
            color: "rgb(235, 100, 10)",
            CVote: "1,248,174",
            img: "/img/igarasi.jpg",
            UD: "⇩",
            UDColor: "#0000ff"
        },
        {
            Link:"/election/vote/number/four",
            Furigana: "タチバナ ヤヨイ",
            name: "橘 弥生",
            job: "立憲民主党",
            vote: "481,371",
            color: "rgb(35, 145, 255)",
            CVote: "827,526",
            img: "/img/tatibana.jpg",
            UD: "⇩",
            UDColor: "#0000ff"
        },
        {
            Link:"/election/vote/number/one",
            Furigana: "アラカワ ルイ",
            name: "新川 るい",
            job: "自由民主党",
            vote: "862,736",
            color: "rgb(210, 35, 25)",
            CVote: "573,842",
            img: "/img/arakawa.jpg",
            UD: "⇧",
            UDColor: "#ff0000",
        },
        {
            Link:"/election/vote/number/six",
            Furigana: "ヤマグチ キセル",
            name: "山口 煙管",
            job: "無所属",
            vote: "184",
            color: "rgb(0, 0, 0)",
            CVote: "194,845",
            img: "/img/yamaguti.jpg",
            UD: "⇩",
            UDColor: "#0000ff"
        },
        {
            Link:"/election/vote/number/seven",
            Furigana: "ルカワ カエデ",
            name: "流川 楓",
            job: "日本維新の会",
            vote: "384,752",
            color: "rgb(225, 154, 0)",
            CVote: "174,257",
            img: "/img/rukawa.jpg",
            UD: "⇧",
            UDColor: "#f00"
        },
        {
            Link:"/election/vote/number/three",
            Furigana: "カラクチ イケル",
            name: "辛口 池流",
            job: "NHK党",
            vote: "5,243",
            color: "rgb(182, 200, 27)",
            CVote: "8,174",
            img: "/img/karakuti.jpg",
            UD: "⇩",
            UDColor: "#00f"
        },
        {
            Link:"/election/vote/number/five",
            Furigana: "ヒラタ コウダイ",
            name: "平田 広大",
            job: "日本共産党",
            vote: "985,257",
            color: "rgb(110, 65, 225)",
            CVote: "3,785",
            img: "/img/hirata.jpg",
            UD: "⇧",
            UDColor: "#f00"
        },
    ]


    return(
        <div className="EDBox">
            <button onClick={() => setRegion('Kansai')} className="return">戻る</button>
            <div className="comparison">
                <section>
                    <h4>擬似選挙</h4>
                </section>
                <section>
                    <h4>実際の選挙</h4>
                </section>
            </div>
            <div className="comparisonEDBox">
                <div className="comparisonEDWrap">
                    {comparisonProfiles.map((profile, index) => <OsakaDetail key={index} {...profile} />)}
                </div>
            </div>
        </div>
    )
}

type profile = {
    Link:string,
    Furigana:string,
    name:string,
    job:string,
    vote:string,
    color:string,
    CVote:string,
    img:string,
    UD:string,
    UDColor:string,
}    
function OsakaDetail(props:profile) {

    return(
        <div className="electoralDistrictWrap">
            <div className="electoralDistrict">
                <Link href={props.Link} className="profile">
                    <Image src={props.img} alt="新川" width={80} height={100}/>
                    <div className="profileName">
                        <p>{props.Furigana}</p>
                        <h4>{props.name}</h4>
                    </div>
                    <div className="profileParty"><p style={{color: props.color}}>{props.job}</p></div>
                </Link>
            </div>
            <div className="electoralDistrictVoteBoxWarp">
                <div className="electoralDistrictVoteBox">
                    <div className="electoralDistrictVote">
                        <p>{props.CVote}</p>
                    </div>
                </div>
                <div className="electoralDistrictVoteBox">
                    <div className="electoralDistrictVote">
                        <p style={{color: props.UDColor}}>{props.UD}</p>
                        <p>{props.vote}</p>
                    </div>
                </div>
            </div>
        </div>
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
