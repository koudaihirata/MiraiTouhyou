"use client"

import "@/components/ElectoralDistrict/ElectoralDistrict.scss";
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
            <button className="button">大阪</button>
            <button className="button">滋賀</button>
            <button className="button">兵庫</button>
            <button className="button">奈良</button>
            <button className="button">和歌山</button>
            <button className="button">三重</button>
        </div>
    )
}

export default function ElectoralDistrict() {
    const [region, setRegion] = useState('prefectures');

    return(
        <>
            <section id="electoralDistrict">
                <h2>選挙区</h2>
                {region === 'prefectures' ? <Prefectures setRegion={setRegion}/> : <Kansai setRegion={setRegion}/>}
            </section>
        </>
    )
}
