"use client"

import Link from "next/link"
import "@/components/electionFooter/electionStyle.css"

export default function Footer_election() {
    return(
        <footer>
            <nav className="footerNav">
                <ul className="footer">
                    <li>
                        <p>
                            <Link href="/">
                                <picture className="footerIcon">
                                    <img alt="ホーム" src="/img/Home2.svg"/>
                                </picture>
                                ホーム
                            </Link>
                        </p>
                    </li>
                    <li>
                        <p>
                            <Link href="#">
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
                                    <img src="/img/election.svg" alt="ミライ投票"/>
                                </picture>
                                ミライ投票
                            </Link>
                        </p>
                    </li>
                    <li>
                        <p>
                            <Link href="#">
                                <picture className="footerIcon">
                                    <img src="/img/square.svg" alt="選挙の広場"/>
                                </picture>
                                選挙の広場
                            </Link>
                        </p>
                    </li>
                    <li>
                        <p>
                            プロフィール
                        </p>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}