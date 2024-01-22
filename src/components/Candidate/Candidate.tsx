import Image from "next/image"



type CandidateProps = {
    name:string,
    party:string,
    // now: "新" | "現" | "元",
    now:string,
    num:Number,
    color:string,
}


export function Candidate(props:CandidateProps) {
    return(
        <div className="candidate">
            <Image src='/img/profile.svg' alt="Icon" width={24} height={24}/>
            <p className="candidateName">{props.name}</p>
            <div style={{backgroundColor:props.color}} className="candidateParty"><p>{props.party}</p></div>
            <div className="candidateNow"><p>{props.now}</p></div>
            <p>{props.num.toString()}票</p>
        </div>
    )
}
