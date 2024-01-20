"use client"

import "@/app/election/vote/style.css"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import React from "react"
import Footer_election from "@/components/electionFooter/election"
import Header_Login from "@/components/header/Login"
import { addDoc, collection } from "firebase/firestore"
import { db } from "@/firebase/firebase"
import { BrowserRouter as Router } from "react-router-dom";



export function Vote() {
// 選択された名前を管理するためのstateを作成します。初期値は空文字列です。
const [selectedName, setSelectedName] = useState('');

// 投票変更を処理する関数です。イベントオブジェクトを引数に取ります。
const handleVoteChange = (event:any) => {
    // イベントが発生した要素から最も近い '.electoralDistrict' 要素を取得します。
    const selectedProfile = event.target.closest('.electoralDistrict');
    // 選択されたプロフィールから名前を取得します。
    const selectedName = selectedProfile.querySelector('.profileName h4').textContent;
    // 選択された名前をstateに保存します。
    setSelectedName(selectedName);
};

// 投票を送信する非同期関数です。イベントオブジェクトを引数に取ります。
const handleSubmit = async (event:any) => {
    // フォームのデフォルトの送信動作をキャンセルします。
    event.preventDefault();
    // 選択された名前をコンソールに出力します。
    console.log(selectedName);

    try{
        // Firestoreの"Vote"コレクションに新しいドキュメントを追加します。そのドキュメントの内容は、選択された名前です。
        const docRef = await addDoc(collection(db, "Vote"),{
            name:selectedName,
        });
        // ドキュメントのIDをコンソールに出力します。
        console.log("Document written with ID: ", docRef.id);
    } catch(e) {
        // ドキュメントの追加中にエラーが発生した場合、そのエラーをコンソールに出力します。
        console.error("Error adding document: ", e);
    }
};

// 選択された党名を管理するためのstateを作成します。初期値は空文字列です。
const [partyName, setPartyName] = useState('');

// 党の変更を処理する関数です。イベントオブジェクトを引数に取ります。
const handlePartyChange = (e:any) => {
    // イベントが発生した要素から最も近い '.proportionalRepresentation' 要素を取得します。
    const selectedParty = e.target.closest('.proportionalRepresentation');
    // 選択された党から党名を取得します。
    const partyName = selectedParty.querySelector('.partyName p').textContent;
    // 選択された党名をstateに保存します。
    setPartyName(partyName);
};

// 党の投票を送信する非同期関数です。イベントオブジェクトを引数に取ります。
const partySubmit = async (e:any) => {
    // フォームのデフォルトの送信動作をキャンセルします。
    e.preventDefault();
    // 選択された党名をコンソールに出力します。
    console.log(partyName);
    try {
        // Firestoreの"Vote"コレクションに新しいドキュメントを追加します。そのドキュメントの内容は、選択された党名です。
        const docRef = await addDoc(collection(db, "Vote"), {
        party: partyName,
    });
        // ドキュメントのIDをコンソールに出力します。
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        // ドキュメントの追加中にエラーが発生した場合、そのエラーをコンソールに出力します。
        console.error("Error adding document: ", e);
    }
};

// 両方の投票を処理する非同期関数です。イベントオブジェクトを引数に取ります。
async function handleBoth(event:any) {
    // フォームのデフォルトの送信動作をキャンセルします。
    event.preventDefault();
    try {
        // 個別の投票と党の投票を送信します。
        await handleSubmit(event);
        await partySubmit(event);
        // 投票が成功したら、ユーザーを確認ページにリダイレクトします。
        window.location.href = "/election/vote/Confirmation";
    } catch (e) {
        // 何かエラーが発生した場合、そのエラーをコンソールに出力します。
        console.error("Error: ", e);
    }
}



    return (
        <main>
            <div>
                <div>
                    <h2>第27回参議院議員通常選挙</h2>
                    <h3>選挙区投票</h3>
                    <div className="voteConstant">
                        <p>定数</p>
                        <p><span>4</span>/7</p>
                    </div>
                    <section className="electoralDistrictBox">
                        <form onSubmit={handleSubmit}>
                            <div className="electoralDistrict">
                                <Image src="/img/arakawa.jpg" alt="新川" width={80} height={100}/>
                                <a href="/election/vote/number/one" className="profile">
                                    <div className="profileName">
                                        <p>アラカワ ルイ</p>
                                        <h4>新川 るい</h4>
                                    </div>
                                    <div className="profileWork">
                                        <p>参議院議員</p>
                                        <p>51歳（女）［現職］</p>
                                    </div>
                                    <div className="profileParty" style={{color:"rgb(210, 35, 25)"}}>自由民主党</div>
                                </a>
                                <div className="VoteBtnWarp">
                                    <input type="radio" name="profile" value="1" onChange={handleVoteChange}/>
                                </div>
                            </div>
                            <div className="electoralDistrict">
                                <Image src="/img/igarasi.jpg" alt="五十嵐" width={80} height={100}/>
                                <a href="/election/vote/number/two" className="profile">
                                    <div className="profileName">
                                        <p>イガラシ タロウ</p>
                                        <h4>五十嵐 太郎</h4>
                                    </div>
                                    <div className="profileWork">
                                        <p>団体役員</p>
                                        <p>43歳（男）［現職］</p>
                                    </div>
                                    <div className="profileParty" style={{color:"rgb(235, 100, 10)"}}>参政党</div>
                                </a>
                                <div className="VoteBtnWarp">
                                    <input type="radio"  name="profile" value="2" onChange={handleVoteChange}/>
                                </div>
                            </div>
                            <div className="electoralDistrict">
                                <Image src="/img/karakuti.jpg" alt="辛口" width={80} height={100}/>
                                <a href="/election/vote/number/three" className="profile">
                                    <div className="profileName">
                                        <p>カラクチ イケル</p>
                                        <h4>辛口 池流</h4>
                                    </div>
                                    <div className="profileWork">
                                        <p>無職</p>
                                        <p>57歳（男）［新人］</p>
                                    </div>
                                    <div className="profileParty" style={{color:"rgb(182, 200, 27)"}}>NHK党</div>
                                </a>
                                <div className="VoteBtnWarp">
                                    <input type="radio"  name="profile" value="3" onChange={handleVoteChange}/>
                                </div>
                            </div>
                            <div className="electoralDistrict">
                                <Image src="/img/tatibana.jpg" alt="橘" width={80} height={100}/>
                                <a href="/election/vote/number/four" className="profile">
                                    <div className="profileName">
                                        <p>タチバナ ヤヨイ</p>
                                        <h4>橘 弥生</h4>
                                    </div>
                                    <div className="profileWork">
                                        <p>政党役員</p>
                                        <p>67歳（女）［現職］</p>
                                    </div>
                                    <div className="profileParty" style={{color:"rgb(35, 145, 255)"}}>立憲民主党</div>
                                </a>
                                <div className="VoteBtnWarp">
                                    <input type="radio"  name="profile" value="4" onChange={handleVoteChange}/>
                                </div>
                            </div>
                            <div className="electoralDistrict">
                                <Image src="/img/hirata.jpg" alt="平田" width={80} height={100}/>
                                <a href="/election/vote/number/five" className="profile">
                                    <div className="profileName">
                                        <p>ヒラタ コウダイ</p>
                                        <h4>平田 広大</h4>
                                    </div>
                                    <div className="profileWork">
                                        <p>参議院議員</p>
                                        <p>41歳（男）［現職］</p>
                                    </div>
                                    <div className="profileParty" style={{color:"rgb(110, 65, 225)"}}>日本共産党</div>
                                </a>
                                <div className="VoteBtnWarp">
                                    <input type="radio"  name="profile" value="5" onChange={handleVoteChange}/>
                                </div>
                            </div>
                            <div className="electoralDistrict">
                                <Image src="/img/yamaguti.jpg" alt="山口" width={80} height={100}/>
                                <a href="/election/vote/number/six" className="profile">
                                    <div className="profileName">
                                        <p>ヤマグチ キセル</p>
                                        <h4>山口 煙管</h4>
                                    </div>
                                    <div className="profileWork">
                                        <p>無職</p>
                                        <p>68歳（男）［新人］</p>
                                    </div>
                                    <div className="profileParty">無所属</div>
                                </a>
                                <div className="VoteBtnWarp">
                                    <input type="radio"  name="profile" value="7" onChange={handleVoteChange}/>
                                </div>
                            </div>
                            <div className="electoralDistrict">
                                <Image src="/img/rukawa.jpg" alt="流川" width={80} height={100}/>
                                <a href="/election/vote/number/seven" className="profile">
                                    <div className="profileName">
                                        <p>ルカワ カエデ</p>
                                        <h4>流川 楓</h4>
                                    </div>
                                    <div className="profileWork">
                                        <p>自営業</p>
                                        <p>38歳（男）［新人］</p>
                                    </div>
                                    <div className="profileParty" style={{color:"rgb(225, 154, 0)"}}>日本維新の会</div>
                                </a>
                                <div className="VoteBtnWarp">
                                    <input type="radio"  name="profile" value="8" onChange={handleVoteChange}/>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
                <div className="proportionalRepresentationWarp">
                    <h3>比例代表選挙</h3>
                    <form className="proportionalRepresentationBox" onSubmit={partySubmit}>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(100, 50, 10)"}}>維新政党・新風</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="1" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(150, 150, 250)"}}>幸福実現党</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="2" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(235, 97, 190)"}}>公明党</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="3" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(0, 16, 165)"}}>国民民主党</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="4" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(235, 100, 10)"}}>参政党</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="5" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(180, 110, 90)"}}>新党くにもり</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="6" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(210, 35, 25)"}}>自由民主党</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="7" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(225, 154, 0)"}}>日本維新の会</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="8" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(110, 65, 225)"}}>日本共産党</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="9" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(170, 130, 75)"}}>日本第一党</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="10" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(35, 70, 0)"}}>ごぼうの党</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="11" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(240, 160, 167)"}}>れいわ新選組</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="12" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(5, 85, 90)"}}>社会民主党</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="13" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(35, 145, 255)"}}>立憲民主党</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="14" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(182, 200, 27)"}}>ＮＨＫ党</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="15" onChange={handlePartyChange}/>
                            </div>
                        </div>
                    </form>
                    <div>
                        <p>※選挙情報に誤りがあった場合、恐れ入りますが<Link href="#">こちら</Link>よりお問合せください。</p>
                        <p>
                            【候補者・政治家の方へ】<br />
                            ※政治家・候補者情報の掲載や変更等は無料で承っておりますので、<br />
                            <Link href="#">こちらをご確認ください。</Link>
                        </p>
                    </div>
                </div>
                <div className="sendBtn">
                    <button onClick={handleBoth}>投票する</button>
                </div>
            </div>
        </main>
    )
}


export default function VoteMain() {
    return(
        <>
            <Header_Login/>
            <Router>
                <Vote/>
            </Router>
            <Footer_election/>
        </>
    )
}
