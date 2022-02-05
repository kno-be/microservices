import React from "react";

const PostList = () => {
return (
    <div className="bg-white max-w-ws shadow-md rounded px-8 pt-6 pb-8 mt-4 mb-4">
        <h1 className="font-bold text-gray-700 text-3xl text-center"> Posts </h1>
        <div id="post-wrapper" className="flex flex-col">
            <div className="flex flex-col m-6" >
                <div className="flex flex-col border-2 border-gray-200 rounded p-2">
                    <h1 className="text-xl text-gray-600">Title</h1>
                    <hr className="mb-2 mt-2"></hr>
                    <p className="text-gray-500">comments: </p>
                    <input class="self-left my-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="comment" type="text" placeholder="Type your text here.."></input>
                    <button class="w-min self-left bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Submit
            </button>
                </div>
            </div>
           
        </div>
        
    </div>
)
}

export default PostList;