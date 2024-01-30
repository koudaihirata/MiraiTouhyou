

import { auth, db, provider } from "@/firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";
import { doc, setDoc } from "firebase/firestore";


export function SignInBtn() {
    const signInWithGoogle = ()=> {
        if (!auth || !provider) {
            console.error('auth or provider is not defined');
            return;
        }
        signInWithPopup(auth, provider)
            .then(async(result) => {
                console.log(result.user);

                // ログイン成功時の処理
                const user = result.user;
                const userDocumentRef = doc(db, "users", `${user.uid}`);

                const userData = await setDoc(userDocumentRef, {
                    name: user.displayName,
                    email: user.email,
                    profile_picture : user.photoURL
                });             
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
                    {/* <SignOutBtn /> */}
                    <Image src="/img/bell.svg" alt="ベル" width={15} height={15}/>
                    <Image src="/img/letter.svg" alt="レター" width={24} height={20}/>
                </>
            ) : (
                <SignInBtn />
            )}
        </>
    )
}

