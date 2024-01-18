"use client"


import Header_Login from "@/components/header/Login";
import Footer_square from "@/components/squareFooter/square";
import "@/app/square/style.scss"
import Image from "next/image";
import Link from "next/link";
import "@/app/square/style.css"
import Inquiry from "@/components/inquiry/inquiry";

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
        src: "/img/KounoPhoto.jpg",
        title: "河野太郎氏、国会でのスマホ使用「私のミス」とお詫び",
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
        src: "/img/KounoPhoto.jpg",
        title: "河野太郎氏、国会でのスマホ使用「私のミス」とお詫び",
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
        src: "/img/KounoPhoto.jpg",
        title: "河野太郎氏、国会でのスマホ使用「私のミス」とお詫び",
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
        src: "/img/KounoPhoto.jpg",
        title: "河野太郎氏、国会でのスマホ使用「私のミス」とお詫び",
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
        src: "/img/KounoPhoto.jpg",
        title: "河野太郎氏、国会でのスマホ使用「私のミス」とお詫び",
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
        src: "/img/KounoPhoto.jpg",
        title: "河野太郎氏、国会でのスマホ使用「私のミス」とお詫び",
        month: "11",
        date: "28",
        week: "火",
        time: "12:55",
        comment: "598",
        place: "東京都",
        categoryPlace: "国会",
    },

]

export function Article(props:articleProps) {
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
            <Header_Login/>
            <main>
                <h2>政治の広場</h2>
                <div className="search">
                    <div className="Sort">
                        <p>並び替え</p>
                    </div>
                    <input type="text" placeholder="キーワードで検索" />
                </div>
                <section> 
                    {articles.map((article,index) => {
                        return<Article key={index} {...article} />
                    })}
                <a href="#">もっと見る</a>
                </section>
            </main>
                <Inquiry/>
            <Footer_square/>
        </>
    )
}