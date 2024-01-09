import Footer_election from "@/components/electionFooter/election";
import Header_Login from "@/components/header/Login";
import "@/app/election/pastResults/electionResults/style.scss"




export default function twentySix() {
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

                </section>
            </main>
            <Footer_election/>
        </>
    )
}