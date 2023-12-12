"use client"

import "@/components/header/style.css"
import SignIn from "../signIn/sigin"

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
                    <li className="signIn">
                        <SignIn/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


