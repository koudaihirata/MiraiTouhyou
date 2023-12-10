"use client"

import Footer_main from "@/components/footer/main"
import Header_main from "@/components/header/main"
import "@/app/election/vote/style.css"




export default function Vote() {
    return(
    <>
        <Header_main/>
        <main>
            <h2>第27回参議院議員通常選挙</h2>
            <h3>選挙区投票</h3>
            <div className="voteConstant">
                <p>定数</p>
                <p><span>4</span>/7</p>
            </div>

        </main>
        <Footer_main/>
    </>
    )
}