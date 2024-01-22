"use client";

import Link from "next/link";
import "@/components/footer/style.css";
import { signInWithPopup } from "firebase/auth";
import Image from "next/image";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useEffect, useState } from "react";

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

function useScroll() {
    const [ scrollPosition, setScrollPosition ] = useState(0);

    useEffect(() => {
        if(typeof window !== 'undefined') {
            const handleScroll = () => {
                setScrollPosition(window.scrollY);
            };
    
            window.addEventListener('scroll', handleScroll);
            return() => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    },[]);

    return scrollPosition;
}

export default function Footer_Login() {
    const [user] = useAuthState(auth);
    const scrollPosition = useScroll();
    const [style, setStyle] = useState({});

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // スクロール位置が250px以上の場合に透明度を計算    
            const opacity = scrollPosition >= 250 ? Math.min((scrollPosition - 250) / 500, 1) : 0;
            // 画面の幅が960px以上の場合にのみ透明度を適用
            if (window.innerWidth >= 960) {
                setStyle({ opacity: opacity });
            }            
        }
    }, [scrollPosition]);

    return (
        <footer style={style}>
            <nav className="footerNav">
                <ul className="footer">
                    <li>
                        <p>
                            <Link href="/">
                                <picture className="footerIcon">
                                    <img alt="ホーム" src="/img/Home.svg" />
                                </picture>
                                ホーム
                            </Link>
                        </p>
                    </li>
                    <li>
                        <p>
                            <Link href="#">
                                <picture className="footerIcon">
                                    <img alt="ポエム" src="/img/poem.svg" />
                                </picture>
                                選挙ポエム
                            </Link>
                        </p>
                    </li>
                    <li>
                        <p>
                            <Link href="/election">
                                <picture className="footerIcon">
                                    <img src="/img/vote.svg" alt="ミライ投票" />
                                </picture>
                                ミライ投票
                            </Link>
                        </p>
                    </li>
                    <li>
                        <p>
                            <Link href="/square">
                                <picture className="footerIcon">
                                    <img
                                        src="/img/square.svg"
                                        alt="選挙の広場"
                                    />
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
    );
}
