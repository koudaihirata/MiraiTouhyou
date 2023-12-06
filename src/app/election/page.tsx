// "use client"

import Btn from "@/components/Btn/Btn"
import Footer_main from "@/components/footer/main"
import Header_Login from "@/components/header/Login"
import Header_main from "@/components/header/main"
import Image from "next/image"


export default function Election() {
    
    return(
        <>
            <Header_Login/>
            <main>
                <picture className="electionView">
                    <img src="/img/electionView.svg" alt="第27回参議院議員通常選挙" />
                </picture>
                <Btn label="投票する"/>
                <Btn label="過去の結果を見る"/>
            </main>
            <Footer_main/>
        </>
    )
}