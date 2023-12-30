"use client"


import Header_Login from "@/components/header/Login";
import Footer_square from "@/components/squareFooter/square";
import Image from "next/image";
import "@/app/square/style.css"



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
            </main>
            <Footer_square/>
        </>
    )
}