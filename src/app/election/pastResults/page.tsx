"use client"

import Footer_election from "@/components/electionFooter/election";
import "@/app/election/pastResults/style.scss"
import Inquiry from "@/components/inquiry/inquiry";

export default function PastResults() {
    return(
        <>
            <main className="PastResultsMain">
                <section className="HouseOfCouncilors">
                    <h2>参議院議員通常選挙</h2>
                    <div>
                        <p><a href="/election/pastResults/electionResults/twenty-six">第26回参議院議員通常選挙結果</a></p>
                        <p><a href="#">第25回参議院議員通常選挙結果</a></p>
                        <p><a href="#">第24回参議院議員通常選挙結果</a></p>
                        <p><a href="#">第23回参議院議員通常選挙結果</a></p>
                        <p><a href="#">第22回参議院議員通常選挙結果</a></p>
                    </div>
                </section>
                <section className="HouseOfRepresentatives">
                    <h2>衆議院議員総選挙・最高裁判所裁判官国民審査</h2>
                    <div>
                        <p><a href="#">第49回衆議院議員総選挙・最高裁判所裁判官国民審査</a></p>
                        <p><a href="#">第48回衆議院議員総選挙・最高裁判所裁判官国民審査</a></p>
                        <p><a href="#">第47回衆議院議員総選挙・最高裁判所裁判官国民審査</a></p>
                        <p><a href="#">第46回衆議院議員総選挙・最高裁判所裁判官国民審査</a></p>
                        <p><a href="#">第45回衆議院議員総選挙・最高裁判所裁判官国民審査</a></p>
                    </div>
                </section>
                <section className="localElections">
                    <h2>地方選挙</h2>
                    <div>
                        <p><a href="#">北海道・東北</a></p>
                        <p><a href="#">関東</a></p>
                        <p><a href="#">北陸・甲信越</a></p>
                        <p><a href="#">東海</a></p>
                        <p><a href="#">関西</a></p>
                        <p><a href="#">四国・中国</a></p>
                        <p><a href="#">九州・沖縄</a></p>
                    </div>
                </section>
            </main>
            <Inquiry/>
            <Footer_election/>
        </>
    )
}
