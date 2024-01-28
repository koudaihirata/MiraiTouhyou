"use client"

import "@/components/header/style.css"
import SignIn from "../signIn/sigin"
import Head from "next/head"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';


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
            }
        }
    },[]);

    return scrollPosition;
}

export default function Header_Login() {
    const scrollPosition = useScroll();
    const [style, setStyle] = useState({});

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const opacity = scrollPosition <= 300 ? 1 - Math.min(scrollPosition / 300, 1) : 0;
            // 画面の幅が960px以上の場合にのみ透明度を適用
            if (window.innerWidth >= 960) {
                setStyle({ opacity: opacity });
            }
        }
    }, [scrollPosition]);

    
    return(
        <>
            <header style={style}>
                <nav className="headerNav">
                    <ul className="header">
                        <li>
                            <h1>
                                <picture>
                                    <img alt="ロゴ" src="/img/logo.svg"/>
                                </picture>
                            </h1>
                        </li>
                        <li className="signIn">
                            <SignIn/>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}


