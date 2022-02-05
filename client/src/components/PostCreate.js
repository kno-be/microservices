import React, { useState } from 'react';
import axios from 'axios'


const PostCreate = () => {
    const [title, setTitle] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault()
        console.log('pressed')
        await axios.post('http://localhost:4000/posts', {title})
        setTitle('')
    }

    return (
        <form onSubmit={onSubmit} 
        className='max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mt-4 mb-4'>
            <h1 className='text-gray-700 text-xl font-bold mb-5'> Create Post </h1>
            <div className='mb-4'>
                <label className="block text-gray-700 text-sm font-bold mb-2" for="title">
                   Title:
                </label>
                <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title"></input>
            </div>
            <div className="flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Submit
            </button>
            </div>
        </form>
    )}

export default PostCreate;