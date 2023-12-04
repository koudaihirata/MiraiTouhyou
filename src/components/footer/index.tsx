"use client"

import Image from "next/image"
import Link from "next/link"

export default function Footer_main() {
    return(
        <nav className="footerNav">
            <ul className="footer">
                <li>
                    <p>
                        <Link href="#">
                            <Image
                                alt="ホーム"
                                src="/img/Home.svg"
                                width={28}
                                height={22}
                            />
                            ホーム
                        </Link>
                    </p>
                </li>
                <li>
                    <p>
                        <Link href="#">
                            <Image
                                alt="ポエム"
                                src="/img/poem.svg"
                                width={25}
                                height={25}
                            />
                            選挙ポエム
                        </Link>
                    </p>
                </li>
                <li>
                    <p>
                        <Link href="#">
                            <Image src="/img/vote.svg" alt="ミライ投票" width={25} height={25}/>
                            ミライ投票
                        </Link>
                    </p>
                </li>
                <li>
                    <p>
                        <Link href="#">
                            <Image src="/img/square.svg" alt="選挙の広場" width={25} height={25}/>
                            選挙の広場
                        </Link>
                    </p>
                </li>
                <li>
                    <p>
                        <Link href="#">
                            <Image src="/img/profile.svg" alt="プロフィール" width={25} height={25}/>
                            プロフィール
                        </Link>
                    </p>
                </li>
            </ul>
        </nav>
    )
}