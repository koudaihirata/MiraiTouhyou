import Footer_election from "@/components/electionFooter/election";
import Header_Login from "@/components/header/Login";
import "@/app/election/pastResults/electionResults/style.scss"
import Link from "next/link";

type partyNames = {
    part:string,
    seatsWon:string,
    obtainedVotes:string,
    votingPercentage:string,
}


function ProportionalRepresentationDistrict(props: { partyNames: partyNames[] }) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>政党名</td>
                        <td>獲得<br />議席数</td>
                        <td>獲得票数</td>
                        <td>得票率</td>
                    </tr>
                </thead>
                <tbody>
                    {props.partyNames.map((party, index) => (
                        <tr key={index}>
                            <td><Link href="#">{party.part}</Link></td>
                            <td>{party.seatsWon}</td>
                            <td>{party.obtainedVotes}</td>
                            <td>{party.votingPercentage}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}


export default function twentySix() {

    const partyNames = [
        {
            part: '維新政党・新風',
            seatsWon: '0',
            obtainedVotes: '65,107',
            votingPercentage: '0.12',
        },
        {
            part: '幸福実現党',
            seatsWon: '0',
            obtainedVotes: '148,020',
            votingPercentage: '0.28',
        },
        {
            part: '公明党',
            seatsWon: '6',
            obtainedVotes: '6,181,431.937',
            votingPercentage: '11.66',
        },
        {
            part: '国民民主党',
            seatsWon: '3',
            obtainedVotes: '3,159,625.890',
            votingPercentage: '5.96',
        },
        {
            part: '参政党',
            seatsWon: '1',
            obtainedVotes: '1,768,385.409',
            votingPercentage: '3.33',
        },
        {
            part: '新党くにもり',
            seatsWon: '0',
            obtainedVotes: '77,861',
            votingPercentage: '0.15',
        },
        {
            part: '自由民主党',
            seatsWon: '18',
            obtainedVotes: '18,256,245.412',
            votingPercentage: '34.43',
        },
        {
            part: '日本維新の会',
            seatsWon: '8',
            obtainedVotes: '7,845,995.352',
            votingPercentage: '14.8',
        },
        {
            part: '日本共産党',
            seatsWon: '3',
            obtainedVotes: '3,618,342.792',
            votingPercentage: '6.82',
        },
        {
            part: '日本第一党',
            seatsWon: '0',
            obtainedVotes: '109,045.614',
            votingPercentage: '0.21',
        },
        {
            part: 'ごぼうの党',
            seatsWon: '0',
            obtainedVotes: '193,724.387',
            votingPercentage: '0.37',
        },
        {
            part: 'れいわ新選組',
            seatsWon: '2',
            obtainedVotes: '2,319,156.016',
            votingPercentage: '4.37',
        },
        {
            part: '社会民主党',
            seatsWon: '1',
            obtainedVotes: '1,258,501.715',
            votingPercentage: '2.37',
        },
        {
            part: '立憲民主党',
            seatsWon: '7',
            obtainedVotes: '6,771,945.011',
            votingPercentage: '12.77',
        },
        {
            part: 'ＮＨＫ党',
            seatsWon: '1',
            obtainedVotes: '1,253,872.467',
            votingPercentage: '2.36',
        },
    ]
    

    return(
        <>
            <Header_Login/>
            <main>
                <section id="information">
                    <h2>第26回参議院議員通常選挙</h2>
                    <div className="information">
                        <div>
                            <h3>投票日</h3>
                            <p>2022年07月10日</p>
                        </div>
                        <div>
                            <h3>投票率</h3>
                            <p>52.05% (↑)</p>
                        </div>
                    </div>
                    <div className="information">
                        <div>
                            <h3>定数/候補者数 　</h3>
                            <p>124 / 545</p>
                        </div>
                        <div>
                            <h3>前回投票率</h3>
                            <p>48.8%</p>
                        </div>
                    </div>
                    <h3>公示日</h3>
                    <p>2022年06月22日</p>
                    <h3>有権者</h3>
                    <p>105,019,203人</p>
                    <div className="gender">
                        <p>男性:50,740,309人</p>
                        <p>女性:54,278,894人</p>
                    </div>
                </section>
                <section id="electoralDistrict">
                    <h2>選挙区</h2>
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
                <section id="proportionalRepresentationDistrict">
                    <h2>比例代表区</h2>
                    <ProportionalRepresentationDistrict partyNames={partyNames} />
                </section>
            </main>
            <Footer_election/>
        </>
    )
}