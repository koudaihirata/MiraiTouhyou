"use client"

import Footer_election from "@/components/electionFooter/election"
import Inquiry from "@/components/inquiry/inquiry"
import "@/app/election/AllResults/style.scss"
import ElectoralDistrict from '@/components/ElectoralDistrict/ElectoralDistrict.client';
import Link from "next/link"


type partyNames = {
    part: string,
    seatsWon: string,
}

function ProportionalRepresentation(props: { partyNames: partyNames[]} ) {
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <td>政党名</td>
                        <td>獲得<br />議席数</td>
                    </tr>
                </thead>
                <tbody>
                    {props.partyNames.map((party, index) => (
                        <tr key={index}>
                            <td><Link href="#">{party.part}</Link></td>
                            <td>{party.seatsWon}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default function AllResults() {

    const pseudoPartyNames = [
        {
            part: '維新政党・新風',
            seatsWon: '1',
        },
        {
            part: '幸福実現党',
            seatsWon: '0',
        },
        {
            part: '公明党',
            seatsWon: '3',
        },
        {
            part: '国民民主党',
            seatsWon: '3',
        },
        {
            part: '参政党',
            seatsWon: '5',
        },
        {
            part: '新党くにもり',
            seatsWon: '0',
        },
        {
            part: '自由民主党',
            seatsWon: '10',
        },
        {
            part: '日本維新の会',
            seatsWon: '8',
        },
        {
            part: '日本共産党',
            seatsWon: '5',
        },
        {
            part: '日本第一党',
            seatsWon: '0',
        },
        {
            part: 'ごぼうの党',
            seatsWon: '0',
        },
        {
            part: 'れいわ新選組',
            seatsWon: '6',
        },
        {
            part: '社会民主党',
            seatsWon: '0',
        },
        {
            part: '立憲民主党',
            seatsWon: '9',
        },
        {
            part: 'ＮＨＫ党',
            seatsWon: '2',
        },
    ]

    const PartyNames = [
        {
            part: '維新政党・新風',
            seatsWon: '0',
        },
        {
            part: '幸福実現党',
            seatsWon: '0',
        },
        {
            part: '公明党',
            seatsWon: '6',
        },
        {
            part: '国民民主党',
            seatsWon: '3',
        },
        {
            part: '参政党',
            seatsWon: '1',
        },
        {
            part: '新党くにもり',
            seatsWon: '0',
        },
        {
            part: '自由民主党',
            seatsWon: '18',
        },
        {
            part: '日本維新の会',
            seatsWon: '8',
        },
        {
            part: '日本共産党',
            seatsWon: '3',
        },
        {
            part: '日本第一党',
            seatsWon: '0',
        },
        {
            part: 'ごぼうの党',
            seatsWon: '0',
        },
        {
            part: 'れいわ新選組',
            seatsWon: '2',
        },
        {
            part: '社会民主党',
            seatsWon: '1',
        },
        {
            part: '立憲民主党',
            seatsWon: '7',
        },
        {
            part: 'ＮＨＫ党',
            seatsWon: '1',
        },
    ]



    return(
        <>
            <main className="AllResultsMain">
                <section className="ResultAnnouncement">
                    <h2>第27回参議院議員通常選挙</h2>
                    <div className="detail">
                        <div>
                            <p>投票日</p>
                            <p>2024年06月01日</p>
                        </div>
                        <div>
                            <p>定数/候補者数</p>
                            <p>124 / 545</p>
                        </div>
                        <div>
                            <p>公示日</p>
                            <p>2024年05月13日</p>
                        </div>
                    </div>
                    <h3>比較</h3>
                    <div className="comparison">
                        <section>
                            <h4>擬似選挙</h4>
                        </section>
                        <section>
                            <h4>実際の選挙</h4>
                        </section>
                    </div>
                </section>
                <ElectoralDistrict/>
                <section className="ProportionalRepresentation">
                    <h2>比例代表区</h2>
                    <div>
                        <div>
                            <ProportionalRepresentation partyNames={pseudoPartyNames}/>
                        </div>
                        <div>
                            <ProportionalRepresentation partyNames={PartyNames}/>
                        </div>
                    </div>
                </section>
                <Inquiry/>
            </main>
            <Footer_election/>
        </>
    )
}