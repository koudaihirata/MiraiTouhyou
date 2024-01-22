"use client"

import { useEffect, useState } from 'react';


export default function BackgroundText() {
    const [scrollPos, setScrollPos] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            }
            window.addEventListener('resize',handleResize);
            return() => {
                window.removeEventListener('resize', handleResize);
            }            
        }
    },[]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const letterScroll = () => {
            setScrollPos(window.scrollY);
            };
            window.addEventListener('scroll', letterScroll);
            return() => {
            window.removeEventListener('scroll', letterScroll);
            }            
        }
    },[]);

    const factor3 = -1.5;

    let color = 'rgb(104, 193, 242)'; // #68C1F2 in RGB
    if (scrollPos > 0 && scrollPos <= 500) {
        const ratio = scrollPos / 500;
        const r = Math.floor(104 + (178 - 104) * ratio);
        const g = Math.floor(193 + (220 - 193) * ratio);
        const b = Math.floor(242 + (243 - 242) * ratio);
        color = `rgb(${r}, ${g}, ${b})`; 
        } else if (scrollPos > 500) {
        color = 'rgb(178, 220, 243)'; // #b2dcf3 in RGB
        }
    const left = scrollPos > 10000 ? -450 : scrollPos * factor3;

    // 960px以下の場合のスタイルを設定
    const styleUnder960px = {
        position: 'fixed' as any,
        bottom: '20px',
        left: left,
        color: color,
        fontSize: '150px',
        zIndex: '-100',
        mixBlendMode: 'multiply' as any,
        fontWeight: 'bold'
    }
     // 960px以上の場合のスタイルを設定
    const styleOver960px = {
        position: 'fixed' as any,
        bottom: '-50px',
        left: left,
        color: color,
        fontSize: '250px',
        zIndex: '-100',
        mixBlendMode: 'multiply' as any,
        fontWeight: 'bold'
    };


    return(
        <>
            <div>
                <p style={windowWidth <= 960 ? styleUnder960px : styleOver960px }>
                FUTYRE&nbsp;VOTING&nbsp;&nbsp;&nbsp;FUTYRE&nbsp;VOTING
                </p>
            </div>
        </>
    )
}