"use client"

import Footer_election from "@/components/electionFooter/election";
import Header_Login from "@/components/header/Login";
import Image from "next/image";
import "@/app/election/vote/number/style.css"



export default function one(){
    return(
        <>
            <Header_Login/>
            <main>
                <div className="backBtn">
                    <button onClick={() => window.history.back()}>戻る</button>
                </div>
                <section>
                    <div className="name">
                        <Image src="/img/arakawa.jpg" alt="新川" width={80} height={100}/>
                        <div>
                            <p>アラカワ　ルイ</p>
                            <h2>新川　るい</h2>
                            <p style={{color:"rgb(210, 35, 25)"}}>自由民主党</p>
                        </div>
                    </div>
                    <div className="profile">
                        <p>職業</p>
                        <p>参議院議員</p>
                    </div>
                    <div className="profile">
                        <p>生年月日</p>
                        <p>1972年　7月3日　51歳</p>
                    </div>
                    <div className="profile">
                        <p>性別</p>
                        <p>女性</p>
                    </div>
                    <p>公約</p>
                    <div className="comment">
                        <p>
                            「私、新川るいは自由民主党の候補者として、次の公約を掲げます。<br />
                            一つ目は、全ての子供が平等に高品質な教育を受けられるよう、教育制度の改革。<br />
                            二つ目は、中小企業を支援し、雇用を創出する新たな経済政策。<br />
                            三つ目は、持続可能な社会を目指し、環境保護とエネルギー効率の向上。<br />
                            最後に、社会的に弱い立場の人々の生活を支える社会保障制度の強化です。<br />
                            これらを通じて、より良い社会を創り上げていきます。」
                        </p>
                    </div>
                </section>
            </main>
            <Footer_election/>
        </>
    )
}