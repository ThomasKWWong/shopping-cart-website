import React, { useState } from 'react';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser(event) {
        event.preventDefault();
        const response = await fetch("/api/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                password,
            }),
        })

        const data = await response.json();
        
        //send to login page with successful registration
        if(data.status === 'ok') {
            alert("Successful Registration");
        }
    }

    return (
            <div>
                <form onSubmit={registerUser}>
                    <h1>Register</h1> <br/>
                    <div>
                        <label>Username</label> <br/>
                        <input value= {username} onChange={(e) => setUsername(e.target.value)} placeholder="Type your username"/><br/>
                        <label>Email</label> <br/>
                        <input value= {email} onChange={(e) => setEmail(e.target.value)} placeholder="Type your email"/><br/>
                        <label>Password</label><br/>
                        <input value= {password} onChange={(e) => setPassword(e.target.value)} placeholder='Type your password'/><br/>
                    </div>
                    <button type = "submit">Register</button>
                </form>
            </div>
    )
}

export default Registration;