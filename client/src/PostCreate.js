import React from 'react';

const PostCreate = () => {
    return (
    <div className='w-full max-w-xs'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div className='mb-4'>
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Create Post
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Title"></input>
            </div>
        </form>
    </div>
    )
}

export default PostCreate;