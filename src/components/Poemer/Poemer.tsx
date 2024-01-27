"use client"

import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import "@/components/Poemer/style.scss"
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'


type PoemerProps = {
    img: string,
    rank: number,
    title: string,
    sabTitle: string,
    dey: string,
    author: string,
    good: number,
    poem: string[],
}

export default function Poemer(props:PoemerProps) {
    const [ isOpen, setIsOpen ] = useState(false);
    const poemRef = useRef<HTMLDivElement>(null);    


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (poemRef.current && !poemRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
    
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    

    return(
        <>
            <div className={`Poem ${isOpen ? "open" : ""}`} ref={poemRef}>
                <div className='theWork'>
                    <div>
                        <div>
                            <Image src={props.img} alt="1位" width={34} height={67} />
                            <p>{props.rank}</p>
                        </div>
                    </div>
                    <section className='WorkName'>
                        <h3>{props.title}</h3>
                        <h4>{props.sabTitle}</h4>
                        <div className='deyToName'>
                            <p>{props.dey}</p>
                            <p>作：<span>{props.author}</span></p>
                        </div>
                    </section>
                </div>
                <div className='ArrowBtn'>
                    <div className='goodBtn'>
                        <FontAwesomeIcon icon={faThumbsUp}/>
                        <p>{props.good}</p>
                    </div>
                </div>
                    <button className="Arrow" onClick={() => setIsOpen(!isOpen)} style={{ transform: isOpen ? "rotate(45deg) rotate(180deg)" : "rotate(45deg)" }}></button>
                {isOpen && (
                    <div className="additionalContent">
                        <p style={{ whiteSpace: 'pre-line' }}>{props.poem.join('\n')}</p>
                    </div>
                )}
            </div>
        </>
    )
}
