"use client"

import Poemer from "@/components/Poemer/Poemer"
import "@/app/poem/style.scss"
import PoemFooter from "@/components/poemFooter/poemFooter"
import Link from "next/link"
import Btn from "@/components/Btn/Btn"
import AddBtn from "@/components/AddBtn/AddBtn"


const Poemers = [
    {
        img: "/img/tapestryOne.svg",
        rank: 1,
        title: "旅立ちの日に",
        sabTitle: "最愛の人に込めた思い",
        dey: "2024.1.25",
        author: "選挙太郎",
        good: 105,
        poem: [
            'あなたと出会ってから',
            '私の世界は色づいた',
            'あなたの笑顔に癒され',
            'あなたの言葉に励まされ',
            '',
            'あなたと歩んだ道は',
            '私の宝物だった',
            'あなたと見た景色は',
            '私の記憶に刻まれた',
            '',
            'でも今日は別れの日',
            'あなたは選挙に出ると言った',
            '私は涙をこらえて',
            'あなたを見送ると決めた',
            '',
            'あなたに伝えたいことは',
            'たくさんあるけど',
            '言葉にできないから',
            'この詩に込めた',
            '',
            'あなたが勝利することを',
            '心から願っています',
            'あなたが帰ってくる日まで',
            '私はここで待っています',
        ].join('\n').split('\n'),
    },
    {
        img: "/img/tapestryTwo.svg",
        rank: 2,
        title: "夏の思い出",
        sabTitle: "一昨年の夏の一幕",
        dey: "2024.1.25",
        author: "板倉代",
        good: 84,
        poem: [
            'あなたと出会ってから',
            '私の世界は色づいた',
            'あなたの笑顔に癒され',
            'あなたの言葉に励まされ',
            '',
            'あなたと歩んだ道は',
            '私の宝物だった',
            'あなたと見た景色は',
            '私の記憶に刻まれた',
            '',
            'でも今日は別れの日',
            'あなたは選挙に出ると言った',
            '私は涙をこらえて',
            'あなたを見送ると決めた',
            '',
            'あなたに伝えたいことは',
            'たくさんあるけど',
            '言葉にできないから',
            'この詩に込めた',
            '',
            'あなたが勝利することを',
            '心から願っています',
            'あなたが帰ってくる日まで',
            '私はここで待っています',
        ].join('\n').split('\n'),
    },
    {
        img: "/img/tapestryThree.svg",
        rank: 3,
        title: "明後日",
        sabTitle: "何が起こるか誰にもわからない",
        dey: "2024.1.25",
        author: "未来いきる",
        good: 63,
        poem: [
            'あなたと出会ってから',
            '私の世界は色づいた',
            'あなたの笑顔に癒され',
            'あなたの言葉に励まされ',
            '',
            'あなたと歩んだ道は',
            '私の宝物だった',
            'あなたと見た景色は',
            '私の記憶に刻まれた',
            '',
            'でも今日は別れの日',
            'あなたは選挙に出ると言った',
            '私は涙をこらえて',
            'あなたを見送ると決めた',
            '',
            'あなたに伝えたいことは',
            'たくさんあるけど',
            '言葉にできないから',
            'この詩に込めた',
            '',
            'あなたが勝利することを',
            '心から願っています',
            'あなたが帰ってくる日まで',
            '私はここで待っています',
        ].join('\n').split('\n'),
    },
    {
        img: "/img/tapestryOthers.svg",
        rank: 4,
        title: "もり",
        sabTitle: "不気味で怖い",
        dey: "2024.1.25",
        author: "げんだりょう",
        good: 26,
        poem: [
            'あなたと出会ってから',
            '私の世界は色づいた',
            'あなたの笑顔に癒され',
            'あなたの言葉に励まされ',
            '',
            'あなたと歩んだ道は',
            '私の宝物だった',
            'あなたと見た景色は',
            '私の記憶に刻まれた',
            '',
            'でも今日は別れの日',
            'あなたは選挙に出ると言った',
            '私は涙をこらえて',
            'あなたを見送ると決めた',
            '',
            'あなたに伝えたいことは',
            'たくさんあるけど',
            '言葉にできないから',
            'この詩に込めた',
            '',
            'あなたが勝利することを',
            '心から願っています',
            'あなたが帰ってくる日まで',
            '私はここで待っています',
        ].join('\n').split('\n'),
    },
    {
        img: "/img/tapestryOthers.svg",
        rank: 5,
        title: "朝日",
        sabTitle: "気持ちがいい",
        dey: "2024.1.25",
        author: "橘桜",
        good: 6,
        poem: [
            'あなたと出会ってから',
            '私の世界は色づいた',
            'あなたの笑顔に癒され',
            'あなたの言葉に励まされ',
            '',
            'あなたと歩んだ道は',
            '私の宝物だった',
            'あなたと見た景色は',
            '私の記憶に刻まれた',
            '',
            'でも今日は別れの日',
            'あなたは選挙に出ると言った',
            '私は涙をこらえて',
            'あなたを見送ると決めた',
            '',
            'あなたに伝えたいことは',
            'たくさんあるけど',
            '言葉にできないから',
            'この詩に込めた',
            '',
            'あなたが勝利することを',
            '心から願っています',
            'あなたが帰ってくる日まで',
            '私はここで待っています',
        ].join('\n').split('\n'),
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
                    <li><Link href="/poem">新着</Link></li>
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
            <AddBtn/>
            <PoemFooter/>
        </>
    )
}
