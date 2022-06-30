import React, { useState } from 'react';
import Content from '../components/Content';
import "../style/home.css"
import "../style/modal.css"
import AnimatedText from 'react-animated-text-content';
import bannerGirl from "../img/bannerGirl.jpg"
import { MdSupportAgent } from 'react-icons/md';
import { ImLeaf, ImTruck } from 'react-icons/im';
import { BsBarChart } from 'react-icons/bs';
import Footer from '../components/Footer';
import { motion } from "framer-motion"




function HomePage(props) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (
        <>

            <div className='container1'>
                <div className='contactInfo'>
                    <h3>tel: +998977777777</h3>
                    <h3>email: demo@gmail.com</h3>
                </div>
                <header>
                    <div className='box'>
                        <div>
                            <AnimatedText
                                type="words" // animate words or chars
                                animation={{
                                    x: '200px',
                                    y: '-20px',
                                    scale: 1.1,
                                    ease: 'ease-in-out',
                                }}
                                animationType="lights"
                                interval={0.06}
                                duration={0.9}
                                tag="p"
                                className="animated-paragraph"
                                includeWhiteSpaces
                                threshold={0.1}
                                rootMargin="20%"
                            >
                                Lorem ipsum dolor sit.
                            </AnimatedText>
                            <AnimatedText
                                type="chars" // animate words or chars
                                animation={{
                                    x: '200px',
                                    y: '-20px',
                                    scale: 1.1,
                                    ease: 'ease-in-out',
                                }}
                                animationType="rifle"
                                interval={0.06}
                                duration={0.9}
                                tag="p"
                                // className="animated-paragraph"
                                includeWhiteSpaces
                                threshold={0.1}
                                rootMargin="20%"
                            >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, esse nisi blanditiis facere sequi quaerat!
                            </AnimatedText>

                            <button className='btnPrimary' onClick={toggleModal} >Buyurtma berish</button>
                        </div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}>
                            <img src={bannerGirl} alt="img" className='imageBanner' />
                        </motion.div>
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
            </div>
            <Footer className="footer" />


            {modal && (
                <div>
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <h2>Buyurtma uchun Xabar qoldiring</h2>
                            <form action="POST" >
                                <div className='toggleForm'>
                                    <input type="text" />
                                    <input type="text" />
                                    <textarea type="text" />
                                </div>
                            </form>
                            <p>Xabar qoldirganingizdan so'ng tez orada siz bilan bog'lanamiz.</p>
                            <button className="close-modal" onClick={toggleModal}>
                                Yopish
                            </button>
                        </div>
                    </div>
                </div>
            )}


        </>
    );
}

export default HomePage;