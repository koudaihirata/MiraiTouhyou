"use client"

import Image from "next/image"

export default function Header_Login() {
    return(
        <header>
            <nav className="headerNav">
                <ul className="header">
                    <li>
                        <h1>
                            <picture>
                                <img alt="ロゴ" src="/img/logo.svg"/>
                            </picture>
                        </h1>
                    </li>
                    <li>
                        <button className="LoginBtn">登録する</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

