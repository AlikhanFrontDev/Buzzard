import React from 'react';
import AdminSideBar from '../components/AdminSideBar';
import "../style/AdminStyle.css"

function AdminPage(props) {

    return (
        <div className='AdminContainer'>
            <AdminSideBar />
            <div><h1>Barcha postlar</h1></div>
            <table >
                <thead>
                    <tr className='head'>
                        <th></th>
                        <th>ID</th>
                        <th>Title</th>
                    </tr>
                </thead>
                {/* {this.state.users.map(users => (
                    <tbody key={users.id}>
                        <tr>
                            <td className='check'></td>
                            <td>{users.id}</td>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users.city}</td>
                            <td>{users.phone}</td>
                            <td>{users.website}</td>
                            <td>
                                <button

                                >
                                    Update
                                </button>
                            </td>
                            <td>
                                <button

                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                ))} */}
            </table>
        </div>
    );
}

export default AdminPage;