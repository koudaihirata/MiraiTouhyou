"use client"

import PoemFooter from "@/components/poemFooter/poemFooter"
import "@/app/poem/style.scss"


export default function Poem() {
    return(
        <>
            <main className="PoemMain">
                <section>
                    <h2>選挙ポエム</h2>
                </section>
                <ul>
                    <li><a href="#">新着</a></li>
                    <li><a href="#">週間</a></li>
                    <li><a href="#">月間</a></li>
                    <li><a href="#">年間</a></li>
                    <li><a href="#">累計</a></li>
                </ul>
            </main>
            <PoemFooter/>
        </>
    )
}

