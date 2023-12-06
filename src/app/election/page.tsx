// "use client"

import Footer_main from "@/components/footer/main"
import Header_Login from "@/components/header/Login"
import Header_main from "@/components/header/main"


export default function election() {
    
    return(
        <>
            <Header_Login/>
            <main>
                <picture className="electionView">
                    <img src="/img/electionView.svg" alt="第27回参議院議員通常選挙" />
                </picture>
            </main>
            <Footer_main/>
        </>
    )
}