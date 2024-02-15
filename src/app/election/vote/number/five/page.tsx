"use client"

import Footer_election from "@/components/electionFooter/election";
import Header_Login from "@/components/header/Login";
import Image from "next/image";
import "@/app/election/vote/number/style.css"
import Link from "next/link";
import { useRouter } from 'next/navigation';



export default function Three(){
    const router = useRouter();

    return(
        <>
            <Header_Login/>
            <main className="mainCandidate">
                <div className="backBtn">
                    <Link href=''>
                        <button onClick={() => router.back()}>戻る</button>
                    </Link>
                </div>
                <section>
                    <div className="name">
                        <Image src="/img/hirata.jpg" alt="平田" width={80} height={100}/>
                        <div>
                            <p>ヒラタ　コウダイ</p>
                            <h2>平田　広大</h2>
                            <p style={{color:"rgb(110, 65, 225)"}}>日本共産党</p>
                        </div>
                    </div>
                    <div className="profile">
                        <p>職業</p>
                        <p>参議院議員</p>
                    </div>
                    <div className="profile">
                        <p>生年月日</p>
                        <p>1982年　6月1日　41歳</p>
                    </div>
                    <div className="profile">
                        <p>性別</p>
                        <p>男性</p>
                    </div>
                    <p>公約</p>
                    <div className="comment">
                        <p>
                            「私、平田広大は日本共産党として、以下の公約を掲げます。<br />
                            一つ目は、経済の活性化と雇用の創出。<br />
                            二つ目は、教育の機会均等と若者の未来への投資。<br />
                            三つ目は、地方創生と地域の活性化。<br />
                            最後に、全国民が安心して生活できる社会保障制度の確立です。<br />
                            これらを通じて、国民一人ひとりが安心して生活でき、誰もが幸せになれる社会を目指します。」
                        </p>
                    </div>
                </section>
            </main>
            <Footer_election/>
        </>
    )
}