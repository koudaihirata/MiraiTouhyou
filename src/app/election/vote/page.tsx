"use client"

import "@/app/election/vote/style.css"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import React from "react"
import Footer_election from "@/components/electionFooter/election"
import Header_Login from "@/components/header/Login"
import { doc, setDoc, addDoc, collection, serverTimestamp, } from "firebase/firestore";
// import firebase from '@/firebase/firebase';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import firebase from 'firebase/app';
import 'firebase/firestore';



type PartyVoteProps = {
    parties:string,
    onClick: () => void,
    selected: boolean,
    party:string,
}

type VoteBtnProps = {
    onClick: () => void;
    selected: boolean;
};

export function CandidateVoteBtn({ onClick, selected }:VoteBtnProps) {
    const styles = {
    backgroundColor: selected ? '#FF1414' : '#fff',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    }
    return (
    <div className="VoteBtn">
        <button style={styles} onClick={onClick}></button>
    </div>
    )
}
export function PartyVoteBtn({ onClick, selected }:VoteBtnProps) {
    const styles = {
        backgroundColor: selected ? '#ff1414' : '#fff',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
    }
    return(
        <div className="partyBtn">
            <button style={styles} onClick={onClick}></button>
        </div>
    )
}


export function PartyVote(props:PartyVoteProps) {
    return(
            <div className="proportionalRepresentation">
                <div className="partyName">
                    <p>維新政党・新風</p>
                </div>
                <div className="partyBtnWarp">
                    <input type="radio" name="party" value="1"/>
                </div>
            </div>

    )
}


export default function Vote(props:PartyVoteProps,) {
    const [selectedName, setSelectedName] = useState('');

    const handleVoteChange = (event:any) => {
        const selectedProfile = event.target.closest('.electoralDistrict');
        const selectedName = selectedProfile.querySelector('.profileName h4').textContent;
        setSelectedName(selectedName);
    };

    const handleSubmit = (event:any) => {
        event.preventDefault();
        console.log(selectedName);
        // ここでselectedNameを送信する処理を書く
    };


    const [partyName, setPartyName] = useState('');

    const handlePartyChange = (e:any) => {
        const selectedParty = e.target.closest('.proportionalRepresentation');
        const partyName = selectedParty.querySelector('.partyName p').textContent;
        setPartyName(partyName);
    };

    const partySubmit = (e:any) => {
        e.preventDefault();
        console.log(partyName);
        
    }

    function handleBoth(e:any) {
        handleSubmit(e);
        partySubmit(e);
    }    

    const firebaseConfig = {
        apiKey: "AIzaSyDIuns1nYm4ECraOatzn40MPMrGwDORvgU",
        authDomain: "future-voting.firebaseapp.com",
        projectId: "future-voting",
        storageBucket: "future-voting.appspot.com",
        messagingSenderId: "248901548022",
        appId: "1:248901548022:web:9b17a1a22ee6ec84a2b9d7",
        measurementId: "G-BTM4XZ162J"
    };

    firebase.initializeApp(firebaseConfig);

    var db = firebase.firestore();
    
    addDoc( collection ( db, "Vote", ) , {
        partyName
    });

    return (
    <>
        <Header_Login/>
        <main>
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
                            <Link href="#" className="profile">
                                <div className="profileName">
                                    <p>アラカワ ルイ</p>
                                    <h4>新川 るい</h4>
                                </div>
                                <div className="profileWork">
                                    <p>参議院議員</p>
                                    <p>51歳（女）［現職］</p>
                                </div>
                                <div className="profileParty">自由民主党</div>
                            </Link>
                            <div className="VoteBtnWarp">
                                <input type="radio" name="profile" value="1" onChange={handleVoteChange}/>
                            </div>
                        </div>
                        <div className="electoralDistrict">
                            <Image src="/img/igarasi.jpg" alt="五十嵐" width={80} height={100}/>
                            <Link href="#" className="profile">
                                <div className="profileName">
                                    <p>イガラシ タロウ</p>
                                    <h4>五十嵐 太郎</h4>
                                </div>
                                <div className="profileWork">
                                    <p>団体役員</p>
                                    <p>43歳（男）［現職］</p>
                                </div>
                                <div className="profileParty">参政党</div>
                            </Link>
                            <div className="VoteBtnWarp">
                                <input type="radio"  name="profile" value="2" onChange={handleVoteChange}/>
                            </div>
                        </div>
                        <div className="electoralDistrict">
                            <Image src="/img/karakuti.jpg" alt="辛口" width={80} height={100}/>
                            <Link href="#" className="profile">
                                <div className="profileName">
                                    <p>カラクチ イケル</p>
                                    <h4>辛口 池流</h4>
                                </div>
                                <div className="profileWork">
                                    <p>無職</p>
                                    <p>57歳（男）［新人］</p>
                                </div>
                                <div className="profileParty">NHK党</div>
                            </Link>
                            <div className="VoteBtnWarp">
                                <input type="radio"  name="profile" value="3" onChange={handleVoteChange}/>
                            </div>
                        </div>
                        <div className="electoralDistrict">
                            <Image src="/img/tatibana.jpg" alt="橘" width={80} height={100}/>
                            <Link href="#" className="profile">
                                <div className="profileName">
                                    <p>タチバナ ヤヨイ</p>
                                    <h4>橘 弥生</h4>
                                </div>
                                <div className="profileWork">
                                    <p>政党役員</p>
                                    <p>67歳（女）［現職］</p>
                                </div>
                                <div className="profileParty">立憲民主党</div>
                            </Link>
                            <div className="VoteBtnWarp">
                                <input type="radio"  name="profile" value="4" onChange={handleVoteChange}/>
                            </div>
                        </div>
                        <div className="electoralDistrict">
                            <Image src="/img/hirata.jpg" alt="平田" width={80} height={100}/>
                            <Link href="#" className="profile">
                                <div className="profileName">
                                    <p>ヒラタ コウダイ</p>
                                    <h4>平田 広大</h4>
                                </div>
                                <div className="profileWork">
                                    <p>参議院議員</p>
                                    <p>41歳（男）［現職］</p>
                                </div>
                                <div className="profileParty">日本共産党</div>
                            </Link>
                            <div className="VoteBtnWarp">
                                <input type="radio"  name="profile" value="5" onChange={handleVoteChange}/>
                            </div>
                        </div>
                        <div className="electoralDistrict">
                            <Image src="/img/hirata.jpg" alt="平田" width={80} height={100}/>
                            <Link href="#" className="profile">
                                <div className="profileName">
                                    <p>ヒラタ コウダイ</p>
                                    <h4>平田 広大</h4>
                                </div>
                                <div className="profileWork">
                                    <p>参議院議員</p>
                                    <p>41歳（男）［現職］</p>
                                </div>
                                <div className="profileParty">日本共産党</div>
                            </Link>
                            <div className="VoteBtnWarp">
                                <input type="radio"  name="profile" value="6" onChange={handleVoteChange}/>
                            </div>
                        </div>
                        <div className="electoralDistrict">
                            <Image src="/img/yamaguti.jpg" alt="山口" width={80} height={100}/>
                            <Link href="#" className="profile">
                                <div className="profileName">
                                    <p>ヤマグチ キセル</p>
                                    <h4>山口 煙管</h4>
                                </div>
                                <div className="profileWork">
                                    <p>無職</p>
                                    <p>68歳（男）［新人］</p>
                                </div>
                                <div className="profileParty">無所属</div>
                            </Link>
                            <div className="VoteBtnWarp">
                                <input type="radio"  name="profile" value="7" onChange={handleVoteChange}/>
                            </div>
                        </div>
                        <div className="electoralDistrict">
                            <Image src="/img/rukawa.jpg" alt="流川" width={80} height={100}/>
                            <Link href="#" className="profile">
                                <div className="profileName">
                                    <p>ルカワ カエデ</p>
                                    <h4>流川 楓</h4>
                                </div>
                                <div className="profileWork">
                                    <p>自営業</p>
                                    <p>38歳（男）［新人］</p>
                                </div>
                                <div className="profileParty">日本維新の会</div>
                            </Link>
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
                            <p>維新政党・新風</p>
                        </div>
                        <div className="partyBtnWarp">
                            <input type="radio" name="party" value="1" onChange={handlePartyChange}/>
                        </div>
                    </div>
                    <div className="proportionalRepresentation">
                        <div className="partyName">
                            <p>幸福実現党</p>
                        </div>
                        <div className="partyBtnWarp">
                            <input type="radio" name="party" value="2" onChange={handlePartyChange}/>
                        </div>
                    </div>
                    <div className="proportionalRepresentation">
                        <div className="partyName">
                            <p>公明党</p>
                        </div>
                        <div className="partyBtnWarp">
                            <input type="radio" name="party" value="3" onChange={handlePartyChange}/>
                        </div>
                    </div>
                    <div className="proportionalRepresentation">
                        <div className="partyName">
                            <p>国民民主党</p>
                        </div>
                        <div className="partyBtnWarp">
                            <input type="radio" name="party" value="4" onChange={handlePartyChange}/>
                        </div>
                    </div>
                    <div className="proportionalRepresentation">
                        <div className="partyName">
                            <p>参政党</p>
                        </div>
                        <div className="partyBtnWarp">
                            <input type="radio" name="party" value="5" onChange={handlePartyChange}/>
                        </div>
                    </div>
                    <div className="proportionalRepresentation">
                        <div className="partyName">
                            <p>新党くにもり</p>
                        </div>
                        <div className="partyBtnWarp">
                            <input type="radio" name="party" value="6" onChange={handlePartyChange}/>
                        </div>
                    </div>
                    <div className="proportionalRepresentation">
                        <div className="partyName">
                            <p>自由民主党</p>
                        </div>
                        <div className="partyBtnWarp">
                            <input type="radio" name="party" value="7" onChange={handlePartyChange}/>
                        </div>
                    </div>
                    <div className="proportionalRepresentation">
                        <div className="partyName">
                            <p>日本維新の会</p>
                        </div>
                        <div className="partyBtnWarp">
                            <input type="radio" name="party" value="8" onChange={handlePartyChange}/>
                        </div>
                    </div>
                    <div className="proportionalRepresentation">
                        <div className="partyName">
                            <p>日本共産党</p>
                        </div>
                        <div className="partyBtnWarp">
                            <input type="radio" name="party" value="9" onChange={handlePartyChange}/>
                        </div>
                    </div>
                    <div className="proportionalRepresentation">
                        <div className="partyName">
                            <p>日本第一党</p>
                        </div>
                        <div className="partyBtnWarp">
                            <input type="radio" name="party" value="10" onChange={handlePartyChange}/>
                        </div>
                    </div>
                    <div className="proportionalRepresentation">
                        <div className="partyName">
                            <p>ごぼうの党</p>
                        </div>
                        <div className="partyBtnWarp">
                            <input type="radio" name="party" value="11" onChange={handlePartyChange}/>
                        </div>
                    </div>
                    <div className="proportionalRepresentation">
                        <div className="partyName">
                            <p>れいわ新選組</p>
                        </div>
                        <div className="partyBtnWarp">
                            <input type="radio" name="party" value="12" onChange={handlePartyChange}/>
                        </div>
                    </div>
                    <div className="proportionalRepresentation">
                        <div className="partyName">
                            <p>社会民主党</p>
                        </div>
                        <div className="partyBtnWarp">
                            <input type="radio" name="party" value="13" onChange={handlePartyChange}/>
                        </div>
                    </div>
                    <div className="proportionalRepresentation">
                        <div className="partyName">
                            <p>立憲民主党</p>
                        </div>
                        <div className="partyBtnWarp">
                            <input type="radio" name="party" value="14" onChange={handlePartyChange}/>
                        </div>
                    </div>
                    <div className="proportionalRepresentation">
                        <div className="partyName">
                            <p>ＮＨＫ党</p>
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
        </main>
        <Footer_election/>
    </>
    )
}
