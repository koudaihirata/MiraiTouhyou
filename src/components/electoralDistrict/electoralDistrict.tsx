

import "@/components/electoralDistrict/electoralDistrict.scss";
import Link from "next/link";


function Prefectures() {
    return(
        <div>
            <button>北海道・東北</button>
            <button>関東</button>
            <button>北陸・甲信越</button>
            <button>東海</button>
            <button>関西</button>
            <button>四国・中国</button>
            <button>九州・沖縄</button>
        </div>
    )
}
function Kinki() {
    return(
        <div>
            <button>京都</button>
            <button>大阪</button>
            <button>滋賀</button>
            <button>兵庫</button>
            <button>奈良</button>
            <button>和歌山</button>
            <button>三重</button>
        </div>
    )
}


export default function ElectoralDistrict() {
    return(
        <>
            <section id="electoralDistrict">
                <h2>選挙区</h2>
                <Prefectures/>
            </section>
        </>
    )
}