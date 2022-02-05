import React, {useState, useEffect} from "react";
import axios from 'axios';

const PostList = () => {
    const[posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts')
        setPosts(res.data)
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    console.log(posts)
    
    const renderedPosts = Object.values(posts).map( post => {
    return (
    <div key={post.id} className="bg-white max-w-ws  px-8 pt-6 ">
      <div id="post-wrapper" className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col border-2 border-gray-200 rounded p-2">
            <h1 className="text-xl text-gray-600">{post.title}</h1>
            <hr className="mb-2 mt-2"></hr>
            <p className="text-gray-500">comments: </p>
            <input
              className="self-left my-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="comment"
              type="text"
              placeholder="Type your text here.."
            ></input>
            <button
              className="w-min self-left bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )})

return (
    renderedPosts
)};

export default PostList;
