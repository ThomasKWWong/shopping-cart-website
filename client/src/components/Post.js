import React, { useState } from 'react';

const Post = () => {
    const [username, setUsername] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    async function makePost(event) {
        event.preventDefault();
        const token = sessionStorage.getItem('token')
        if(token){
            const response = await fetch("/api/token-confirmation", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token,
                }),
            })
            const data = await response.json()

            //no token (not logged in)
            if(!data){
                sessionStorage.removeItem('token')
                alert("not logged in")
            }
            else{
                setUsername(data.username)
                console.log(username)
            }
        } 
        else{
            alert("Not logged in")
        }
    }

    return(
        <div>
            <h1>Make a Post</h1>
            <form onSubmit={makePost}>
                <label>Title</label> <br/>
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title of product'/><br/>
                <label>Description</label> <br/>
                <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description of product'/> <br/>
                <label>Price</label> <br/>
                <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Price of product'/> <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
    
}

export default Post