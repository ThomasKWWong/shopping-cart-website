import React, { useState } from 'react';

const Registration = () => {
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    //function connects to backend to register to database
    async function registerUser(event) {
        event.preventDFefault();
        const response = await fetch("/api/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: 
                JSON.stringify({
                    usermame,
                    email,
                    password
                }),
            })

        const data = await response.json();
        if(data.status === 'ok') {
            alert("Successful Registration");
        }


    }

    return (
        <div>
            
        </div>
    )
}

export default Registration