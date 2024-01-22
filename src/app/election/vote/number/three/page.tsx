"use client"

import Footer_election from "@/components/electionFooter/election";
import Header_Login from "@/components/header/Login";
import Image from "next/image";
import "@/app/election/vote/number/style.css"



export default function three(){
    return(
        <>
            <Header_Login/>
            <main>
                <div className="backBtn">
                    <button onClick={() => window.history.back()}>戻る</button>
                </div>
                <section>
                    <div className="name">
                        <Image src="/img/karakuti.jpg" alt="辛口" width={80} height={100}/>
                        <div>
                            <p>カラクチ　イケル</p>
                            <h2>辛口　池流</h2>
                            <p style={{color:"rgb(182, 200, 27)"}}>NHK党</p>
                        </div>
                    </div>
                    <div className="profile">
                        <p>職業</p>
                        <p>無職</p>
                    </div>
                    <div className="profile">
                        <p>生年月日</p>
                        <p>1966年　2月26日　57歳</p>
                    </div>
                    <div className="profile">
                        <p>性別</p>
                        <p>男性</p>
                    </div>
                    <p>公約</p>
                    <div className="comment">
                        <p>
                        「私、辛口池流はNHK党の候補者として、以下の公約を掲げます。<br />
                        一つ目は、NHK受信料の公平な徴収制度の確立。<br />
                        二つ目は、公共放送の透明性と公正性を保証するための改革。<br />
                        三つ目は、情報の自由と公開を推進し、メディアの多様性を保護。<br />
                        最後に、国民の声を反映した番組制作を実現します。<br />
                        これらを通じて、公共放送のあり方を見直し、国民のための放送を目指します。」                        </p>
                    </div>
                </section>
            </main>
            <Footer_election/>
        </>
    )
}