"use client"

import "@/app/election/vote/style.css"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import React from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "@/firebase/firebase"
import { useRouter } from 'next/navigation';

export default function Vote() {
// 選択された名前を管理するためのstateを作成します。初期値は空文字列です。
const [selectedName, setSelectedName] = useState('');
const router = useRouter();

// 投票変更を処理する関数です。イベントオブジェクトを引数に取ります。
const handleVoteChange = (event:any) => {
    if(typeof window !== 'undefined') {
        // 選択された名前をstateに保存します。
        setSelectedName(event.target.value);
    }    
};
// 投票を送信する非同期関数です。イベントオブジェクトを引数に取ります。
const handleSubmit = async () => {
    if(typeof window !== 'undefined') {
        try{
            // Firestoreの"Vote"コレクションに新しいドキュメントを追加します。そのドキュメントの内容は、選択された名前です。
            const docRef = await addDoc(collection(db, "Vote"),{
                name:selectedName,
            });
        } catch(e) {
        }
    }        
};

// 選択された党名を管理するためのstateを作成します。初期値は空文字列です。
const [partyName, setPartyName] = useState('');

// 党の変更を処理する関数です。イベントオブジェクトを引数に取ります。
const handlePartyChange = (e:any) => {
    if(typeof window !== 'undefined') {
        // 選択された党名をstateに保存します。
        setPartyName(e.target.value);
    }        
};

// 党の投票を送信する非同期関数です。イベントオブジェクトを引数に取ります。
const partySubmit = async () => {
    if(typeof window !== 'undefined') {
        try {
            // Firestoreの"Vote"コレクションに新しいドキュメントを追加します。そのドキュメントの内容は、選択された党名です。
            const docRef = await addDoc(collection(db, "Vote"), {
            party: partyName,
        });
        } catch (e) {
        }
    }        
};

// 両方の投票を処理する非同期関数です。イベントオブジェクトを引数に取ります。
async function handleBoth(event:any) {
    if(typeof window !== 'undefined') {
        try {
            // 個別の投票と党の投票を送信します。
            await handleSubmit();
            await partySubmit();
            // 投票が成功したら、ユーザーを確認ページにリダイレクトします。
            router.push("/election/vote/Confirmation");
    
        } catch (e) {
            // 何かエラーが発生した場合、そのエラーをコンソールに出力します。
            console.error("Error: ", e);
        }
    }        
}



    return (
        <main className="voteMain">
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
                                    <input type="radio" name="profile" value="新川 るい" onChange={handleVoteChange}/>
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
                                    <input type="radio"  name="profile" value="五十嵐 太郎" onChange={handleVoteChange}/>
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
                                    <input type="radio"  name="profile" value="辛口 池流" onChange={handleVoteChange}/>
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
                                    <input type="radio"  name="profile" value="橘 弥生" onChange={handleVoteChange}/>
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
                                    <input type="radio"  name="profile" value="平田 広大" onChange={handleVoteChange}/>
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
                                    <input type="radio"  name="profile" value="山口 煙管" onChange={handleVoteChange}/>
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
                                    <input type="radio"  name="profile" value="流川 楓" onChange={handleVoteChange}/>
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
                                <input type="radio" name="party" value="維新政党・新風" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(150, 150, 250)"}}>幸福実現党</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="幸福実現党" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(235, 97, 190)"}}>公明党</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="公明党" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(0, 16, 165)"}}>国民民主党</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="国民民主党" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(235, 100, 10)"}}>参政党</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="参政党" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(180, 110, 90)"}}>新党くにもり</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="新党くにもり" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(210, 35, 25)"}}>自由民主党</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="自由民主党" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(225, 154, 0)"}}>日本維新の会</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="日本維新の会" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(110, 65, 225)"}}>日本共産党</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="日本共産党" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(170, 130, 75)"}}>日本第一党</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="日本第一党" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(35, 70, 0)"}}>ごぼうの党</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="ごぼうの党" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(240, 160, 167)"}}>れいわ新選組</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="れいわ新選組" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(5, 85, 90)"}}>社会民主党</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="社会民主党" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(35, 145, 255)"}}>立憲民主党</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="立憲民主党" onChange={handlePartyChange}/>
                            </div>
                        </div>
                        <div className="proportionalRepresentation">
                            <div className="partyName">
                                <p style={{color:"rgb(182, 200, 27)"}}>ＮＨＫ党</p>
                            </div>
                            <div className="partyBtnWarp">
                                <input type="radio" name="party" value="ＮＨＫ党" onChange={handlePartyChange}/>
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
