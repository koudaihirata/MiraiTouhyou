"use client"

import "@/components/header/style.css"

export default function Header_main() {
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
                    <div>
                        <li>
                            <picture className="bell">
                                <img alt="ベル" src="/img/bell.svg"/>
                            </picture>
                        </li>
                        <li>
                            <picture>
                                <img alt="手紙" src="/img/letter.svg"/>
                            </picture>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

