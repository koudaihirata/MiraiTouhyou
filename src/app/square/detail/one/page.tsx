"use client"

import Header_Login from "@/components/header/Login"
import Footer_square from "@/components/squareFooter/square"
import "@/app/square/detail/style.scss"




export default function detailOne() {
    return(
        <>
            <Header_Login/>
            <main>
                <div className="firstView"></div>
            </main>
            <Footer_square/>
        </>
    )
}