"use client"

import Image from "next/image"

export default function Header_main() {
    return(
        <nav className="headerNav">
            <ul className="header">
                <li>
                    <Image
                        alt="ロゴ"
                        src="/img/logo.svg"
                        width={45}
                        height={45}
                    />
                </li>
                <div>
                    <li>
                        <Image
                            alt="ベル"
                            src="/img/bell.svg"
                            width={15}
                            height={15}
                        />
                    </li>
                    <li>
                        <Image
                            alt="手紙"
                            src="/img/letter.svg"
                            width={24}
                            height={20}
                        />
                    </li>
                </div>
            </ul>
        </nav>
    )
}

