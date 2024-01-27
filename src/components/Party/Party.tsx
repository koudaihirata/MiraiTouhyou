type PartyProps = {
    name:string,
    num:Number,
    color:string,
}

export function Party(props:PartyProps) {
    return(
        <div className="party" style={{backgroundColor:props.color}}>
            <div className="partyName"><p>{props.name}</p></div>
            <div className="partyNum"><p>{props.num.toString()}</p></div>
        </div>
    )
}
