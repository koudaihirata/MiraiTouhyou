"use client"

import Header_main from '@/components/header/main';
import Footer_main from '@/components/footer/main';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header_Login from '@/components/header/Login';
import Footer_Login from '@/components/footer/Login';

export default function Home() {
  useEffect(()=> {
    const img = document.querySelectorAll("main li") as NodeListOf<HTMLElement>;
    let index = 0;

    img[index].style.display = "block";
    
    const slide = setInterval(() =>{

      img[index].style.display = "none";

      index++;

      if (index >= img.length) {
        index = 0;
      }

      img[index].style.display = "block";
    },7000);
  },[]);
  

  return (
    <>
      <Header_Login/>
      <main>
        <ul className='firstView'>
          <li>
            <picture><img src="/img/firstView1.jpg" alt='その一票が未来を変える'/></picture>
            </li>
          <li><picture><img src="/img/firstView2.jpg" alt='ルールを守って楽しく投票'/></picture></li>
        </ul>
        <div  className='beginnerBtn'>
          <Link href='#'>
            <picture>
              <img src='/img/beginner.svg' alt='初心者へ'/>
            </picture>
          </Link>
        </div>
        <section className='notice'>
          <div>
            <div>
              <picture>
                <img src='/img/bell2.svg' alt='ベル'/>
              </picture>
              <h2>お知らせ</h2>
            </div>
            <p className='dey'>2023/11/16</p>
            <p className='Sentence'>
              参議院議員通常選挙は2026年に実施予定なので、<br/>
              それまでは、選挙前投票の実施は行いません。
            </p>
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
                <picture className='tantan'>
                  <img src='/img/tenten.svg' alt='詳しく'/>
                </picture>
                <picture>
                  <img src='/img/politician.jpg' alt='政治家' width={75} height={75}/>
                </picture>
              </div>
            </div>
          </div>
          <div className='SeeMore'>
            <p><Link href='#'>ニュースをもっと読む</Link></p>
          </div>
        </section>
      </main>
      <Footer_Login/>
    </>
  )
}
