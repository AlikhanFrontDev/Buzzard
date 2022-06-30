import React from 'react';
import "../style/content.css";



import person1 from "../img/person1.jpg"
import person2 from "../img/person2.jpg"
import person3 from "../img/person3.jpg"
import person4 from "../img/person4.jpg"
import person5 from "../img/person5.jpg"
import person6 from "../img/person6.jpg"
import person7 from "../img/person7.jpg"
import star2 from "../img/star2.jpg"
import star3 from "../img/star3.jpg"
import star4 from "../img/star4.jpg"
import star5 from "../img/star5.jpg"
import star6 from "../img/star6.jpg"
import p1 from "../img/p1.jpg"
import p2 from "../img/p2.jpg"
import p3 from "../img/p3.jpg"
import p4 from "../img/p4.jpg"
import p5 from "../img/p5.jpg"
import MySwiper from './Swiper';




function Content(props) {
    return (
        <div>
            <div className="section">
                <MySwiper />
            </div>
            <main className="main">
                <section className="info1">
                    <h2>Zaytun ekstraktili shampun</h2>
                    <p>Zaytun ekstraktiga ega BUZZARD Olive shampuni qazg'oqdan tez va samarali
                        qutilish uchun effektiv vositadir.
                        U bosh terisining keragidan ortiq yog'lanishini bartaraf etib, yog' bezlarining ishini
                        normallashtiradi, shampun soch tuzilishini butun uzunligi bo'ylab silliqlab, ularni
                        yanada kuchli, elastik va chiroyli qiladi.
                        BUZZARD Olive Shampuni qazg'oq va qichishishdan xalos bo'lish uchun ayniqsa
                        mos keladi, chunki uning tarkibida namlovchi va oziqlantiruvchi moddalar mavjud.</p>
                    <h2>Qora sedana ekstrakti shampun</h2>
                    <p>Qora sedana ekstrakti asosida yaratilgan BUZZARD Black Cumin shampuni
                        sochlarni mayin tozalaydi va oziqlantiradi, ularni shikastlanishdan himoya
                        qiladi. Shuningdek, sochlarni mustahkamlash va elastikligini saqlashga yordam
                        beradi.
                        Qora sedana urug'lari ko'p asrlar davomida soch parvarishida qo'llanilib keladi.
                        Ular ko'plab muhim yog' kislotalari, vitaminlar va minerallarga boy.
                        Shunday ekan, sochlarni samarali oziqlantiruvchi, shikastlanishdan himoya
                        qiluvchi va mustahkamlovchi qora sedana ekstrakti, shuningdek, jenshen va
                        xitoy o‘tlari bilan boyitilgan BUZZARD Black Cumin shampunining ajoyib
                        xususiyatlarini o‘zingizda sinab ko‘ring.</p>
                    <h2>Sutli soch shampuni va kondisioneri</h2>
                    <p>BUZZARD Milk sutli soch shampuni sochlarni qayta tiklash va intensiv
                        parvarish qilinishini ta'minlaydi.
                        BUZZARD Milk shampunining innovatsion formulasi tarkibidagi komponentlar
                        tufayli sochni parvarish qiladi, mustahkamlaydi va himoya qiladi: Su oqsillari -
                        sochni tiklaydi, natriy gialuronat - namlaydi, Choy polifenol ekstrakti esa
                        oziqlantiruvchi ta'sirga ega bo'lib, sochlarning ipakdek mayinligini tiklaydi.
                        Faol tarkibiy qismlarning konsentratsiyasi sochlarning tarkib va tuzilishiga qat'iy
                        muvofiq tarzda tanlangan, shuning uchun sochlar turli og'irliklarsiz, kerakli
                        intensivlikdagi parvarishni oladi. Natija: kuchli va sog'lom sochlar!</p>
                    <h2>Soch uchun kondisioner</h2>
                    <p>BUZZARD konditsioneri pantenolga boy bo'lgan ajoyib vosita sanalib, u chigal va
                        uchlari chalkash sochlarni oson tarashga yordam beradi.
                        Pantenol sochning butun uzunligi bo'ylab soch tolasiga chuqur kirib, uni
                        suvsizlanishdan hamda uchlarini sinish va chalkashliklardan himoya qiladi.
                        Shu qatori, pantenol soch va bosh terisini yuvilgach qurib qolishdan himoya qiladi.
                        BUZZARD konditsioneridan muntazam foydalanish sochlarning oson taralishini,
                        porlashini va silliqligini ta'minlaydi.</p>
                </section>
                {/* <figure className="figure1">
                    <img className="figure-img" src="http://placekitten.com/g/350/200" alt="a kitten" />
                </figure> */}
                <figure className="figure2">
                    <img className="figure-img" src={star6} alt="a kitten" />
                </figure>
                <figure className="figure3">
                    <img className="figure-img" src={star3} alt="a kitten" />
                </figure>
                <figure className="figure4">
                    <img className="figure-img" src={star4} alt="a kitten" />
                </figure>
                <figure className="figure5">
                    <img className="figure-img" src={star5} alt="a kitten" />
                </figure>
                {/* <figure className="figure6">
                    <img className="figure-img" src={person1} alt="a kitten" />
                </figure> */}
                <figure className="figure6">
                    <ul className='products'>
                        <img src={p1} alt="" className='productsImage' />
                        <img src={p2} alt="" className='productsImage' />
                        <img src={p3} alt="" className='productsImage' />
                        <img src={p5} alt="" className='productsImage' />
                    </ul>
                </figure>
                {/* <figure className="figure6">
                    <img className="figure-img" src={star2} alt="a kitten" />
                </figure> */}
                <section className="info2">
                    <h2>Zanjabil ekstraktili shampun</h2>
                    <p>BUZZARD Ginger shampuni zaif va nimjon sochlar uchun parvarish vositasidir.
                        Shampun bosh terisi va sochni mayin tozalaydi.
                        Shampunning asosiy faol moddasi zanjabil ekstrakti hisoblanadi. Davolovchi
                        ta'sirga ega bo'lgan zanjabil bosh terisida qon aylanishini rag'batlantiradi, soch
                        to'kilishining oldini oladi va soch o'sishini maqbullashtirib, ularni kuchliroq va
                        tashqi ta'sirlarga chidamli qiladi.
                        BUZZARD Ginger shampunini birinchi marta qo'llashning o'zidayoq, sochlar
                        zichroq, kuchliroq va elastikroq ko'rinadi.</p>
                    <h2>Atirgul ekstraktili shampun</h2>
                    <p>BUZZARD Rose atirgul ekstraktiga ega soch uchun shampuni yumshoq va
                        mayin teksturaga ega bo'lib, soch tuzilishini mustahkamlaydi, unga yorqinlik va
                        hajm baxsh etadi.
                        Quloqsiz va shikastlangan sochlarni samarali parvarish qiladi va namlaydi.
                        Nozik atirgul iforiga egadir. Sochni mustahkamlash qatori, ularni
                        shikastlanishdan himoya qiladi va bosh terisining yog' muvozanatini tartibga
                        soladi.
                        BUZZARD Rose tarkibida sharqona dorivor o'tlar majmuasi ham mavjud.
                        U sochlaringizga energiya, hayotiylik va tabiiy porlashni qaytaradi.</p>
                </section>
                {/* <figure className="figure7">
                    <img className="figure-img" src="http://placekitten.com/g/300/150" alt="a kitten" />
                </figure> */}
                {/* <figure className="figure7">
                    <img className="figure-img" src={star4} alt="a kitten" />
                </figure>
                <figure className="figure7">
                    <img className="figure-img" src={star4} alt="a kitten" />
                </figure> */}
            </main>
        </div>
    );
}

export default Content;