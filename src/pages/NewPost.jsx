import React from 'react';
import AdminSideBar from '../components/AdminSideBar';
import "../style/AdminStyle.css"

function NewPost(props) {
    return (
        <div className='AdminContainer'>
            <AdminSideBar />
            <div>
                <h1>Mavzuni kiritish</h1>
                <input type="text" />
                <h1>Rasm joylash</h1>
                <input type="file" />
                <h1>Matn kiritish</h1>
                <textarea name="" id="" cols="30" rows="10"></textarea>

            </div>
        </div>
    );
}

export default NewPost;