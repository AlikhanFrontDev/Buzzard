import React from 'react';
import "../style/adminSidebar.css"
import { NavLink } from "react-router-dom"

function AdminSideBar(props) {
    return (
        <div className='adminSidebar'>
            <div className="container">
                <h1>Admin</h1>
                <h2>Buzzard</h2>
            </div>
            <div>
                <ul className='navigationInAdmin'>
                    <NavLink className='adminNav' to={'/AdminPage'}>Postlar</NavLink>
                    <NavLink className='adminNav' to={'/NewPost'}>Yangi post</NavLink>
                    <NavLink className='adminNav' to={'/Notification'}>Xabarlar</NavLink>
                </ul>
            </div>
        </div>
    );
}

export default AdminSideBar;