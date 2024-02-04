import Image from "next/image";
import "@/components/ElectoralD/Profile/Profile.scss"


type profile = {
    Furigana:string,
    name:string,
    Work:string,
    age:number,
    gender:string,
    job:string,
    vote:number,
    color: string,
    CVote:string,
    img: string,
}


export default function Profile(props:profile) {
    return(
        <div className="electoralDistrictWrap">
            <div className="electoralDistrict">
                <Image src={props.img} alt="新川" width={80} height={100}/>
                <a href="/election/vote/number/one" className="profile">
                    <div className="profileName">
                        <p>{props.Furigana}</p>
                        <h4>{props.name}</h4>
                    </div>
                    <div className="profileWork">
                        <p>{props.Work}</p>
                        <p>{props.age}歳（{props.gender}）［{props.job}］</p>
                    </div>
                    <div className="profileParty"><p style={{color: props.color}}>{props.CVote}</p></div>
                </a>
            </div>
            <div className="electoralDistrictVote">
                <p>{props.vote}票</p>
            </div>
        </div>
    )
}