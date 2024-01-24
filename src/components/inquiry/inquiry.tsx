import Link from "next/link";
import "@/components/inquiry/inquiry.scss"
import Image from "next/image";


export default function Inquiry() {
    return(
        <section className="Inquiry">
            <p>ミライ投票では、「実際の選挙を身近な存在に」をコンセプトに、<br />より多くの若い有権者が政治に参加し、未来を形成することを奨励する<br />教育的なコンテンツサイトです。</p>
            <div>
                <Image src="/img/logo.svg" alt="logo" width={30} height={30} />
                <div>
                    <p><Link href="#">ミライ投票について</Link></p>
                    <div>
                        <p><Link href="#">利用規約</Link></p>
                        <p><Link href="#">プライバシーポリシー</Link></p>
                        <p><Link href="#">サイトご利用案内</Link></p>
                        <p><Link href="#">お問い合わせ</Link></p>
                    </div>
                </div>
            </div>
            <p className="small"><small>&copy;　ミライ投票</small></p>
        </section>
    )
}