"use client"

import Poemer from "@/components/Poemer/Poemer"
import "@/app/poem/style.scss"
import PoemFooter from "@/components/poemFooter/poemFooter"
import Link from "next/link"


const Poemers = [
    {
        img: "/img/tapestryOne.svg",
        rank: 1,
        title: "旅立ちの日に",
        sabTitle: "最愛の人に込めた思い",
        dey: "2024.1.25",
        author: "選挙太郎",
        good: 105,
        poem: "あなたと出会ってから",
        aaa: "あなたと出会ってから",
    },
    {
        img: "/img/tapestryTwo.svg",
        rank: 2,
        title: "夏の思い出",
        sabTitle: "一昨年の夏の一幕",
        dey: "2024.1.25",
        author: "板倉代",
        good: 84,
        poem: 'あなたと出会ってから<br />私の世界は色づいた<br />あなたの笑顔に癒され<br />あなたの言葉に励まされ<br /><br />あなたと歩んだ道は<br />私の宝物だった<br />あなたと見た景色は<br />私の記憶に刻まれた<br /><br />でも今日は別れの日<br />あなたは選挙に出ると言った<br />私は涙をこらえて<br />あなたを見送ると決めた<br /><br />あなたに伝えたいことは<br />たくさんあるけど<br />言葉にできないから<br />この詩に込めた<br /><br />あなたが勝利することを<br />心から願っています<br />あなたが帰ってくる日まで<br />私はここで待っています',
        aaa: "あなたと出会ってから",
    },
    {
        img: "/img/tapestryThree.svg",
        rank: 3,
        title: "明後日",
        sabTitle: "何が起こるか誰にもわからない",
        dey: "2024.1.25",
        author: "未来いきる",
        good: 63,
        poem: 'あなたと出会ってから<br />私の世界は色づいた<br />あなたの笑顔に癒され<br />あなたの言葉に励まされ<br /><br />あなたと歩んだ道は<br />私の宝物だった<br />あなたと見た景色は<br />私の記憶に刻まれた<br /><br />でも今日は別れの日<br />あなたは選挙に出ると言った<br />私は涙をこらえて<br />あなたを見送ると決めた<br /><br />あなたに伝えたいことは<br />たくさんあるけど<br />言葉にできないから<br />この詩に込めた<br /><br />あなたが勝利することを<br />心から願っています<br />あなたが帰ってくる日まで<br />私はここで待っています',
    },
    {
        img: "/img/tapestryOthers.svg",
        rank: 4,
        title: "もり",
        sabTitle: "不気味で怖い",
        dey: "2024.1.25",
        author: "げんだりょう",
        good: 26,
        poem: 'あなたと出会ってから<br />私の世界は色づいた<br />あなたの笑顔に癒され<br />あなたの言葉に励まされ<br /><br />あなたと歩んだ道は<br />私の宝物だった<br />あなたと見た景色は<br />私の記憶に刻まれた<br /><br />でも今日は別れの日<br />あなたは選挙に出ると言った<br />私は涙をこらえて<br />あなたを見送ると決めた<br /><br />あなたに伝えたいことは<br />たくさんあるけど<br />言葉にできないから<br />この詩に込めた<br /><br />あなたが勝利することを<br />心から願っています<br />あなたが帰ってくる日まで<br />私はここで待っています',
    },
    {
        img: "/img/tapestryOthers.svg",
        rank: 5,
        title: "朝日",
        sabTitle: "気持ちがいい",
        dey: "2024.1.25",
        author: "橘桜",
        good: 6,
        poem: 'あなたと出会ってから<br />私の世界は色づいた<br />あなたの笑顔に癒され<br />あなたの言葉に励まされ<br /><br />あなたと歩んだ道は<br />私の宝物だった<br />あなたと見た景色は<br />私の記憶に刻まれた<br /><br />でも今日は別れの日<br />あなたは選挙に出ると言った<br />私は涙をこらえて<br />あなたを見送ると決めた<br /><br />あなたに伝えたいことは<br />たくさんあるけど<br />言葉にできないから<br />この詩に込めた<br /><br />あなたが勝利することを<br />心から願っています<br />あなたが帰ってくる日まで<br />私はここで待っています',
    },

]

export default function Cumulative() {

    return(
        <>
            <main className="PoemMain">
                <section className="poemTitle">
                    <h2>選挙ポエム</h2>
                </section>
                <ul>
                    <li><Link href="/poem" style={{background: "#fff",color: "#333"}}>新着</Link></li>
                    <li><Link href="/poem/week">週間</Link></li>
                    <li><Link href="/poem/monthly">月間</Link></li>
                    <li><Link href="/poem/yearly">年間</Link></li>
                    <li><Link href="#" style={{background: "#68c1f2",color: "#fff"}}>累計</Link></li>
                </ul>
                {Poemers.map((poem, index) => {
                    return <Poemer key={index} {...poem}/>
                })}
                <p><Link href="#">作品をもっと見る</Link></p>
            </main>
            <PoemFooter/>
        </>
    )
}
