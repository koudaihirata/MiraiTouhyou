"use client"

import Footer_election from "@/components/electionFooter/election";
import Header_Login from "@/components/header/Login";
import Image from "next/image";
import "@/app/election/vote/number/style.css"



export default function seven(){
    return(
        <>
            <Header_Login/>
            <main>
                <div className="backBtn">
                    <button onClick={() => window.history.back()}>戻る</button>
                </div>
                <section>
                    <div className="name">
                        <Image src="/img/rukawa.jpg" alt="流川" width={80} height={100}/>
                        <div>
                            <p>ルカワ　カエデ</p>
                            <h2>流川　楓</h2>
                            <p>自営業</p>
                        </div>
                    </div>
                    <div className="profile">
                        <p>職業</p>
                        <p>日本維新の会</p>
                    </div>
                    <div className="profile">
                        <p>生年月日</p>
                        <p>1985年　9月14日　38歳</p>
                    </div>
                    <div className="profile">
                        <p>性別</p>
                        <p>男性</p>
                    </div>
                    <p>公約</p>
                    <div className="comment">
                        <p>
                            「私、流川楓は日本維新の会の候補者として、以下の公約を掲げます。<br />
                            一つ目は、行政の透明性と効率性を向上させるための改革。<br />
                            二つ目は、経済の活性化と雇用の創出。<br />
                            三つ目は、教育の機会均等と子供たちの未来への投資。<br />
                            最後に、地方自治と地域の活性化を推進します。<br />
                            これらを通じて、全ての国民が安心して生活でき、誰もが幸せになれる社会を目指します。」
                        </p>
                    </div>
                </section>
            </main>
            <Footer_election/>
        </>
    )
}