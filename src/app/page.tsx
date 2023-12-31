"use client"

import Link from 'next/link';
import Header_Login from '@/components/header/Login';
import Footer_Login from '@/components/footer/Login';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <Header_Login/>
      <main>
        <Slider {...settings} className='firstView'>
          <picture>
            <img src="/img/firstView1.jpg" alt='その一票が未来を変える' className='.firstViewImg'/>
          </picture>
          <picture>
            <img src="/img/firstView2.jpg" alt='ルールを守って楽しく投票' className='.firstViewImg'/>
          </picture>
        </Slider>
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
      </main>
      <Footer_Login/>
    </>
  )
}
