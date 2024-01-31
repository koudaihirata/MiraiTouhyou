"use client"

import Footer_square from "@/components/squareFooter/square";
import "@/app/square/style.scss"
import Image from "next/image";
import Link from "next/link";
import "@/app/square/style.css"
import Inquiry from "@/components/inquiry/inquiry";
import BackgroundText from "@/components/backgroundText/backgroundText";
import { useEffect, useState } from "react";
import type { NextPage, GetServerSideProps } from 'next'

type articleProps = {
    link:string,
    src:string,
    title:string,
    month:string,
    date:string,
    week:string,
    time:string,
    comment:string,
    place:string,
    categoryPlace:string,
}
const articles = [
    {
        link: "/square/detail/one",
        src: "/img/FireflyPhoto.jpg",
        title: "河野氏、国会でのスマホ使用「私のミス」とお詫び",
        month: "11",
        date: "28",
        week: "火",
        time: "12:55",
        comment: "598",
        place: "東京都",
        categoryPlace: "国会",
    },
    {
        link: "#",
        src: "/img/FireflyCall.jpg",
        title: "石破氏、党内結束呼びかけ「ポスト岸田」高市氏前に",
        month: "11",
        date: "28",
        week: "火",
        time: "12:55",
        comment: "598",
        place: "東京都",
        categoryPlace: "国会",
    },
    {
        link: "#",
        src: "/img/FireflyRetirement.jpg",
        title: "共産・志位委員長が退任。交代は24年ぶり",
        month: "11",
        date: "28",
        week: "火",
        time: "12:55",
        comment: "598",
        place: "東京都",
        categoryPlace: "共産",
    },
    {
        link: "#",
        src: "/img/FireflyCurry.jpg",
        title: "炊き出しのカレー「普段の何万倍も美味しかった」",
        month: "11",
        date: "28",
        week: "火",
        time: "12:55",
        comment: "598",
        place: "東京都",
        categoryPlace: "国会",
    },
    {
        link: "#",
        src: "/img/FireflyAmerican.jpg",
        title: "米駐日大使「日本は米国内では信じられないほど厚い支持」",
        month: "11",
        date: "28",
        week: "火",
        time: "12:55",
        comment: "598",
        place: "東京都",
        categoryPlace: "国会",
    },
    {
        link: "#",
        src: "/img/FireflyHandshake.jpg",
        title: "日米首脳会談「4月10日」軸に、訪米は4月の上旬で再調整",
        month: "11",
        date: "28",
        week: "火",
        time: "12:55",
        comment: "598",
        place: "東京都",
        categoryPlace: "国会",
    },

]

function Article(props:articleProps) {
    return(
        <>
            <div>
                <a href={props.link}>
                    <Image src={props.src} alt="KounoPhoto" width={140} height={120} className="photo" />
                    <input type="radio" />
                    <p>{props.title}</p>
                    <div>
                        <div className="timeComment">
                            <p>{props.month}/{props.date}({props.week}) {props.time}</p>
                            <p>{props.comment}</p>
                        </div>
                        <div className="category">
                            <div className="place">
                                <Image src="/img/place.svg" alt="場所" width={4} height={6}/>
                                <p>{props.place}</p>
                            </div>
                            <div className="categoryPlace">
                                <p>{props.categoryPlace}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default function Square() {
    return(
        <>
            <main className="SquareMain">
                <h2>政治の広場</h2>
                <section className="SquareSection"> 
                    {articles.map((article,index) => {
                        return<Article key={index} {...article} />
                    })}
                </section>
                <p><Link href="#">もっと見る</Link></p>
            </main>
            <BackgroundText/>
            <Inquiry/>
            <Footer_square/>
        </>
    )
}



