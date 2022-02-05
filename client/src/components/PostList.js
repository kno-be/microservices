import React, {useState, useEffect} from "react";
import axios from 'axios';
import CommentCreate from "./CommentCreate";

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
    <div key={post.id} className="bg-white max-w-ws">
      <div id="post-wrapper" className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col border-2 border-gray-200 rounded p-2">
            <h1 className="text-xl text-gray-600">{post.title}</h1>
            <hr className="mb-2 mt-2"></hr>
            <p className="text-gray-500">comments: </p>
            <CommentCreate/>
          </div>
        </div>
      </div>
    </div>
  )})

return (
    renderedPosts
)};

export default PostList;
