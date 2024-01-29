"use client"

import "@/components/footer/style.css"
import Image from "next/image"

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import Link from "next/link";

export function Icon() {
    const [user] = useAuthState(auth);

    return (
        <>
            {user ? (
                <Image src={auth.currentUser?.photoURL || "/default/icon/path"} alt="アイコン" width={25} height={25} />
            ) : (
                <Image
                    src="/img/profile.svg"
                    alt="プロフィール"
                    width={25}
                    height={25}
                />
            )}
        </>
    );
}


export default function Footer_square() {
    return(
        <footer>
            <nav className="footerNav">
                <ul className="footer">
                    <li>
                        <p>
                            <Link href="/">
                                <picture className="footerIcon">
                                    <img alt="ホーム" src="/img/Home.svg"/>
                                </picture>
                                ホーム
                            </Link>
                        </p>
                    </li>
                    <li>
                        <p>
                            <Link href="/poem">
                                <picture className="footerIcon">
                                    <img alt="ポエム" src="/img/poem.svg"/>
                                </picture>
                                選挙ポエム
                            </Link>
                        </p>
                    </li>
                    <li>
                        <p>
                            <Link href="/election">
                                <picture className="footerIcon">
                                    <img src="/img/vote.svg" alt="ミライ投票"/>
                                </picture>
                                ミライ投票
                            </Link>
                        </p>
                    </li>
                    <li>
                        <p>
                            <Link href="/square">
                                <picture className="footerIcon">
                                    <img src="/img/squareIcon.svg" alt="選挙の広場"/>
                                </picture>
                                政治の広場
                            </Link>
                        </p>
                    </li>
                    <li>
                        <p>
                            <Link href="/profile" className="footerP">
                                <Icon />
                                プロフィール
                            </Link>
                        </p>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}