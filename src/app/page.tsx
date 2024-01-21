"use client"

import Link from 'next/link';
import Footer_Login from '@/components/footer/Login';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head'
import Inquiry from '@/components/inquiry/inquiry';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const settings = {
    className:'firstView',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const [ scrollY , setScrollY ] = useState<any>(0);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };    
  },[]);

  useEffect(() => {
    const letterScroll = () => {
      setScrollPos(window.pageYOffset);
    };
    window.addEventListener('scroll', letterScroll);
    return() => {
      window.removeEventListener('scroll', letterScroll);
    }
  },[]);

  const factor1 = 0.9;
  const factor2 = 0.77; 
  
  const trans1 = scrollY > 300 ? 270 : scrollY * factor1;
  const trans2 = scrollY > 300 ? 230 : scrollY * factor2;
  
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



  return (
    <>
      <div>
        <p style={{position:'fixed', bottom:'-50px', left:left, color:color, fontSize:'250px', zIndex:'-100', mixBlendMode:'multiply', fontWeight:'bold'}}>
          FUTYRE&nbsp;VOTING&nbsp;&nbsp;&nbsp;FUTYRE&nbsp;VOTING
        </p>
      </div>
        <Footer_Login/>
      <main>
        <Slider {...settings}>
          <picture>
            <img src="/img/firstView1.jpg" alt='その一票が未来を変える' className='.firstViewImg'/>
          </picture>
          <picture>
            <img src="/img/firstView2.jpg" alt='ルールを守って楽しく投票' className='.firstViewImg'/>
          </picture>
        </Slider>
        <div className='translucentSquare1' style={{transform: `translateY(${trans1}px) translateX(-50%)`}}></div>
        <div className='translucentSquare2' style={{transform: `translateY(${trans2}px) translateX(-50%)`}}></div>
        <div  className='beginnerBtn'>
          <Link href='#'>
              <Image src='/img/beginner.svg' alt='初心者へ' width={330} height={80}/>
          </Link>
        </div>
        <section className='notice'>
          <div>
            <div className='noticeTitle'>
              <picture>
                <img src='/img/bell2.svg' alt='ベル'/>
              </picture>
              <h2>お知らせ</h2>
            </div>
            <div>
              <p className='dey'>2023/11/16</p>
              <p className='Sentence'>
                参議院議員通常選挙は2026年に実施予定なので、<br/>
                それまでは、選挙前投票の実施は行いません。
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className='newsMain'>
            <div>
              <div>
                <h3>石破氏、党内結束呼びかけ<br/>「ポスト岸田」高市氏前に</h3>
                <p>〜〜新聞デジタル・5時間前</p>
              </div>
              <div className='newsPhoto'>
                <picture className='point'>
                  <img src='/img/point.svg' alt='詳しく'/>
                </picture>
                <picture>
                  <img src='/img/politician.jpg' alt='政治家' width={75} height={75}/>
                </picture>
              </div>
            </div>
          </div>
          <div className='SeeMore'>
            <div>
              <a href='/square'>ニュースをもっと読む</a>
            </div>
          </div>
        </section>
        <Inquiry />
      </main>
    </>
  )
}
