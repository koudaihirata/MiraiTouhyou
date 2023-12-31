"use client";

import Link from "next/link";
import "@/components/footer/style.css";
import { signInWithPopup } from "firebase/auth";
import Image from "next/image";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";

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

export default function Footer_Login() {
    const [user] = useAuthState(auth);

    return (
        <footer>
            <nav className="footerNav">
                <ul className="footer">
                    <li>
                        <p>
                            <a href="/">
                                <picture className="footerIcon">
                                    <img alt="ホーム" src="/img/Home.svg" />
                                </picture>
                                ホーム
                            </a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <a href="#">
                                <picture className="footerIcon">
                                    <img alt="ポエム" src="/img/poem.svg" />
                                </picture>
                                選挙ポエム
                            </a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <a href="/election">
                                <picture className="footerIcon">
                                    <img src="/img/vote.svg" alt="ミライ投票" />
                                </picture>
                                ミライ投票
                            </a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <a href="/square">
                                <picture className="footerIcon">
                                    <img
                                        src="/img/square.svg"
                                        alt="選挙の広場"
                                    />
                                </picture>
                                政治の広場
                            </a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <a href="/profile" className="footerP">
                                <Icon />
                                プロフィール
                            </a>
                        </p>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}
