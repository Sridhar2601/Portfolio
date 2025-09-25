import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Contactget() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get("https://6888a259adf0e59551bac01f.mockapi.io/api/intern/Contact")
            .then(res => setUserData(res.data));
    }, []);

    const Delete = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
        axios.delete(`https://6888a259adf0e59551bac01f.mockapi.io/api/intern/Contact/${id}`)
            .then(() => {
                setUserData(prevData => prevData.filter(user => user.id !== id));
            })
    }
};


    return (
        <div style={{ padding: '20px' }}>
            <center>
                <h2 className='pb-4'>Contact Details</h2>
                {userData.length > 0 ? (
                    <table border="1" cellPadding="10" style={{ width: '80%', backgroundColor: 'white', boxShadow: '0 0 10px black' }}>
                        <thead>
                            <tr style={{ backgroundColor: 'green', color: 'white' }}>
                                <th style={{ border: '2px solid black' }}>S.No</th>
                                <th style={{ border: '2px solid black' }}>Name</th>
                                <th style={{ border: '2px solid black' }}>Email</th>
                                <th style={{ border: '2px solid black' }}>Message</th>
                                <th style={{ border: '2px solid black' }}>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((user, index) => (
                                <tr key={user.id} style={{ textAlign: 'left' }}>
                                    <td style={{ border: '2px solid black' }}>{index + 1}</td>
                                    <td style={{ border: '2px solid black' }}>{user.name}</td>
                                    <td style={{ border: '2px solid black' }}>{user.email}</td>
                                    <td style={{ border: '2px solid black' }}>{user.message}</td>
                                    <td style={{ border: '2px solid black' }}><input type='button' className='btn btn-danger' value='Delete' onClick={() => Delete(user.id)}></input></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Loading data...</p>
                )}
            </center>
        </div>
    );
}

