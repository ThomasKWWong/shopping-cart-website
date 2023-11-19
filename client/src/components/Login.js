import React, { useState } from 'react';

const Login = () => {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');

    async function loginUser(event) {
        event.preventDefault();
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON',
            },
            body: JSON.stringify({
                emailOrUsername,
                password,
            }),
        })

        const data = await response.json();

        if(data.status === 'ok') {
            alert("Successful login!")
            sessionStorage.setItem('token', data.user);
        }
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <label>Email/Username</label> <br/>
                <input value={emailOrUsername} onChange={(e) => setEmailOrUsername(e.target.value)} placeholder='Enter email or username'></input> <br/>
                <label>Password</label> <br/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password'></input> <br/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login