

import { auth, provider } from "@/firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";


export function SignInBtn() {
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

export function SignOutBtn() {

    return (
        <button onClick={() => auth.signOut()} className="LoginBtn">
            <p>サインアウト</p>
        </button>
    )
}




export default function SignIn() {
    const [user] = useAuthState(auth);

    return(
        <>
            {user ? (
                <>
                    <SignOutBtn />
                    <Image src="/img/bell.svg" alt="ベル" width={15} height={15}/>
                    <Image src="/img/letter.svg" alt="レター" width={24} height={20}/>
                </>
            ) : (
                <SignInBtn />
            )}
        </>
    )
}

