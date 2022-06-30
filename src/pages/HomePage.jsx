import React from 'react';
import Content from '../components/Content';
import "../style/home.css"
import bannerGirl from "../img/bannerGirl.jpg"
import { MdSupportAgent } from 'react-icons/md';
import { ImLeaf, ImTruck } from 'react-icons/im';
import { BsBarChart } from 'react-icons/bs';


function HomePage(props) {
    return (
        <div className='container'>
            <div className='info'>
                <h3>tel: +998977777777</h3>
                <h3>email: demo@gmail.com</h3>
            </div>
            <header>
                <div className='box'>
                    <div>
                        <h1 className='headerTitle'>Lorem ipsum dolor sit.</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, esse nisi blanditiis facere sequi quaerat!</p>
                        <button className='btnPrimary' >Buyurtma berish</button>
                    </div>
                    <img src={bannerGirl} alt="img" className='imageBanner' />
                </div>
            </header>
            <nav>

                <ul className='navLinks'>
                    <div className='box3'>

                        <div className='box2'>
                            <MdSupportAgent className='icon' />
                            <p>Online konsultatsiya</p>
                        </div >
                        <div className='box2'>
                            <ImLeaf className='icon' />
                            <p>100% tabiy</p>
                        </div>
                    </div>
                    <div className='box3'>

                        <div className='box2'>
                            <ImTruck className='icon' />
                            <p>Yetkazib berish xizmati</p>
                        </div>
                        <div className='box2'>
                            <BsBarChart className='icon' />
                            <p>Yuqori sifat</p>
                        </div>
                    </div>
                </ul>

            </nav>
            <Content className="main" />
            <footer>Footer</footer>
        </div>
    );
}

export default HomePage;