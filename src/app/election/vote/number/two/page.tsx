"use client"

import Footer_election from "@/components/electionFooter/election";
import Header_Login from "@/components/header/Login";
import Image from "next/image";
import "@/app/election/vote/number/style.css"
import { useRouter } from 'next/navigation';



export default function Two(){
    const router = useRouter();

    return(
        <>
            <Header_Login/>
            <main>
                <div className="backBtn">
                    <button onClick={() => router.back()}>戻る</button>
                </div>
                <section>
                    <div className="name">
                        <Image src="/img/igarasi.jpg" alt="五十嵐" width={80} height={100}/>
                        <div>
                            <p>イガラシ　タロウ</p>
                            <h2>五十嵐　太郎</h2>
                            <p style={{color:"rgb(235, 100, 10)"}}>参政党</p>
                        </div>
                    </div>
                    <div className="profile">
                        <p>職業</p>
                        <p>団体役員</p>
                    </div>
                    <div className="profile">
                        <p>生年月日</p>
                        <p>1980年　10月14日　43歳</p>
                    </div>
                    <div className="profile">
                        <p>性別</p>
                        <p>男性</p>
                    </div>
                    <p>公約</p>
                    <div className="comment">
                        <p>
                            「私、五十嵐太郎は参政党の候補者として、以下の公約を掲げます。<br />
                            一つ目は、地方創生を推進し、地域の活性化を図ること。<br />
                            二つ目は、若者の雇用を増やすための新たな産業政策。<br />
                            三つ目は、再生可能エネルギーの普及と環境問題への取り組み。<br />
                            最後に、全国民が安心して生活できる社会保障制度の確立です。<br />
                            これらを通じて、国民一人ひとりが安心して生活できる社会を目指します。」      
                        </p>
                    </div>
                </section>
            </main>
            <Footer_election/>
        </>
    )
}