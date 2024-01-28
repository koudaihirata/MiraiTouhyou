"use client"

import Header_Login from "@/components/header/Login"
import Footer_square from "@/components/squareFooter/square"
import Image from "next/image"
import "@/app/square/detail/style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons"
import { useRouter } from 'next/navigation';
import Inquiry from "@/components/inquiry/inquiry"


type detailProps = {
    name:string,
    comment:string,
    replyNam:number,
    goodNam:number,
    badNum:number,
}
const details = [
    {
        name: "ぴろぴろ",
        comment: "今時、企業の会議であればみんなPCを持って参加してるよね？　会議の流れで必須になった資料をPCで探したりする...",
        replyNam: 35,
        goodNam: 3945,
        badNum: 194,
    },   
    {
        name: "カルシファー",
        comment: "紙が勿体無いのでいいのでは？",
        replyNam: 24,
        goodNam: 2498,
        badNum: 102,
    },
]

function Com(props:detailProps) {
    return(
        <div className="Com">
            <div className="name">
                <div className="Image"><Image src="/img/profile.svg" alt="profile" width={24} height={24} /></div>
                <h4>{props.name}</h4>
            </div>
            <div className="comment">
                <p>{props.comment}</p>
                <p><a href="#">もっと見る</a></p>
                <div>
                    <p><a href="#">{props.replyNam} 件の返信を表示する</a></p>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <p>{props.goodNam}</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faThumbsDown} />
                            <p>{props.badNum}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default function DetailOne() {
    const router = useRouter();

    return(
        <>
            <main className="DetailOneMain">
                <div className="firstView">
                    <button onClick={() => router.back()}>戻る</button>
                </div>
                <section>
                    <h2>河野太郎氏、国会でのスマホ使用「私のミス」とお詫び</h2>
                    <div className="timeCom">
                        <p>11/28(火) 12:55</p>
                        <div>
                            <Image src="/img/comment.svg" alt="place" width={24} height={18} />
                            <p>598</p>
                        </div>
                    </div>
                    <div className="detail">
                        <h3>　河野太郎デジタル相は28日の閣議後の記者会見で、前日の参院予算委員会でスマートフォンを使って調べ物をしながら答弁しようとして、末松信介委員長から注意されたことに関し「スマホを使っちゃったのは私のミスですのでおわび申し上げる」と謝罪した。</h3>
                        <h4>　27日の委員会では、立憲民主党の辻元清美氏が2019年3月当時の外相が誰だったかを質問した。河野氏は胸ポケットからスマホを取り出し「ちょっと確認します」と調べ始めた。末松氏が利用を控えるようたしなめると、河野氏は「だめなんですね」と応じ、胸ポケ…</h4>
                        <p><a href="#">もっと見る</a></p>
                    </div>
                    {details.map((detail, index) => {
                        return<Com key={index} {...detail} />
                    })}
                    <div className="Com">
                        <div className="name">
                            <div className="Image"><Image src="/img/profile.svg" alt="profile" width={24} height={24} /></div>
                            <h5>転々</h5>
                        </div>
                        <div className="comment commentLast">
                            <p>スマホで関係ないものを見ているのならダメですが、大事なメモなどを見るだけとかならいいと思う。</p>
                        </div>
                        <p><a href="#">もっと見る（670件）</a></p>
                    </div>
                </section>
                <p><a href="#">＋</a></p>
            </main>
            <Inquiry/>
            <Footer_square/>
        </>
    )
}