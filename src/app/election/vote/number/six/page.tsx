"use client"

import Footer_election from "@/components/electionFooter/election";
import Header_Login from "@/components/header/Login";
import Image from "next/image";
import "@/app/election/vote/number/style.css"
import { useRouter } from 'next/navigation';



export default function Six(){
    const router = useRouter();

    return(
        <>
            <Header_Login/>
            <main className="mainCandidate">
                <div className="backBtn">
                    <button onClick={() => router.back()}>戻る</button>
                </div>
                <section>
                    <div className="name">
                        <Image src="/img/yamaguti.jpg" alt="山口" width={80} height={100}/>
                        <div>
                            <p>ヤマグチ　キセル</p>
                            <h2>山口　煙管</h2>
                            <p>無所属</p>
                        </div>
                    </div>
                    <div className="profile">
                        <p>職業</p>
                        <p>無職</p>
                    </div>
                    <div className="profile">
                        <p>生年月日</p>
                        <p>1955年　6月1日　68歳</p>
                    </div>
                    <div className="profile">
                        <p>性別</p>
                        <p>男性</p>
                    </div>
                    <p>公約</p>
                    <div className="comment">
                        <p>
                            「私、山口煙管は無所属の候補者として、以下の公約を掲げます。<br />
                            一つ目は、社会保障の充実と格差の是正。<br />
                            二つ目は、教育の機会均等と子供たちの未来への投資。<br />
                            三つ目は、環境問題への積極的な取り組みと持続可能な社会の実現。<br />
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