import React from "react";
import './index.css'
import PostCreate from './components/PostCreate'
import PostList from "./components/PostList";

const App = () => {
    return (
    <div className="bg-slate-600 w-full flex flex-col justify-center items-center">
        <PostCreate/>
        <h1 className="bg-black w-fit text-white text-4xl mb-2 text-center py-2 px-28">Posts</h1>
        <PostList/>
    </div>)
}

export default App;