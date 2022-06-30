import React from 'react';
import "../style/footer.css"

import { GrFacebook, GrMail } from 'react-icons/gr';
import { FaTelegramPlane } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';

function Footer(props) {

    return (
        <>
            <div className="footer">
                <div className="formContainer">
                    <h1>Obuna bo'ling</h1>
                    <form action="POST">
                        <input type="text" className='fields' />
                        <input type="text" className='fields' />
                        <textarea name="" id="" cols="20" rows="10"></textarea>
                    </form>
                </div>
                <div className="socialMedia">
                    <AiOutlineInstagram className='instagram icons' />
                    <GrFacebook className='facebook icons' />
                    <FaTelegramPlane className='icons telegram' />
                    <GrMail className='gmail icons' />
                </div>
                <div className="kontakts">
                    <h3>Kontaktlar</h3>
                    <h3>Tel: +998977777777</h3>
                    <h3>Email: info@gmail.com</h3>
                    <h3>Manzil: Toshkent 99 99 99</h3>
                </div>
            </div>
        </>
    );
}

export default Footer;