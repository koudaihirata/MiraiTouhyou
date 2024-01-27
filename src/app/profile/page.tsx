"use client"

import Footer_profile from "@/components/profileFooter/page";
import "@/app/profile/style.scss"
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "@/firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import Inquiry from "@/components/inquiry/inquiry";



function SignInBtn() {
    const signInWithGoogle = ()=> {
        if (!auth || !provider) {
            console.error('auth or provider is not defined');
            return;
        }
        signInWithPopup(auth, provider)
            .then((result) => {
                // ログイン成功時の処理
            })
            .catch((error) => {
                // エラーハンドリング
                console.error(error.message);
            });
    };

    return (
        <button onClick={signInWithGoogle} className="LoginBtn">
            <p>登録する</p>
        </button>
    )
}

function SignOutBtn() {

    return (
        <button onClick={() => auth.signOut()} className="LoginBtn">
            <p>サインアウト</p>
        </button>
    )
}


function ProfilerPage() {
    const [user] = useAuthState(auth)
    console.log(auth.currentUser);
    
    
return(
    <>
        {user ? (
            <>
                <section>
                    <div className="GoogleProfile">
                        <Image src={auth.currentUser?.photoURL || "/default/icon/path"} alt="アイコン" width={80} height={80} />
                        <div>
                            <div>
                                <p>{auth.currentUser?.displayName}</p>
                                <a href="#">プロフィールを編集</a>
                            </div>
                            <p>{auth.currentUser?.email}</p>
                        </div>
                    </div>
                    <div className="profile">
                        <p>生年月日</p>
                        <p>2002年　6月1日</p>
                    </div>
                    <div className="profile2">
                        <p>性別</p>
                        <p>男性</p>
                    </div>
                    <div className="comment">
                        <p>一言</p>
                        <div className="commentSection">
                            <p>こんにちは、よろしくお願いします。</p>
                        </div>
                    </div>
                    <div className="news">
                        <p>お気に入りの記事</p>
                        <div>
                            <a href="#">
                                <Image src="/img/FireflyPhoto.jpg" alt="KounoPhoto" width={140} height={120} className="photo" />
                                <input type="radio" checked/>
                                <p>河野太郎氏、国会でのスマホ使用「私のミス」とお詫び</p>
                                <div>
                                    <div className="timeComment">
                                        <p>11/28(火) 12:55</p>
                                        <p>598</p>
                                    </div>
                                    <div className="category">
                                        <div className="place">
                                            <Image src="/img/place.svg" alt="場所" width={4} height={6}/>
                                            <p>東京都</p>
                                        </div>
                                        <div className="categoryPlace">
                                            <p>国会</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                <div className="SignBtn">
                    <SignOutBtn/>
                </div>
            </>
        ) : (
            <div className="SignBtn">
                <SignInBtn/>
            </div>
        )}
    </>
)
}

export default function profile() {
    return(
        <>
            <main>
                <ProfilerPage/>
                <Inquiry/>
            </main>
            <Footer_profile/>
        </>
    )
}