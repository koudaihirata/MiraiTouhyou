import Footer_election from "@/components/electionFooter/election";
import Header_Login from "@/components/header/Login";





export default function Conf() {
    return(
        <>
            <Header_Login/>
            <main style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%', height: '100vh', gap: '32px'}}>
                <p style={{fontSize: '16px', textAlign: 'center'}}>投票完了しました</p>
                <a href="/" style={{fontSize: '16px', color: '#6464FF', textDecoration: 'underline'}}>ホームに戻る</a>
            </main>
            <Footer_election/>
        </>
    )
}