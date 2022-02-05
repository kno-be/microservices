import React from 'react';

const PostCreate = () => {
    return (
        <form className='max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mt-4 mb-4'>
            <h1 className='text-gray-700 text-xl font-bold mb-5'> Create Post </h1>
            <div className='mb-4'>
                <label className="block text-gray-700 text-sm font-bold mb-2" for="Title">
                   Title:
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title"></input>
            </div>
            <div class="flex items-center justify-center">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Submit
            </button>
            </div>
        </form>
    )}

export default PostCreate;