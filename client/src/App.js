import React from "react";
import './index.css'
import PostCreate from './components/PostCreate'
import PostList from "./components/PostList";

const App = () => {
    return (
    <div className="bg-slate-400 w-full flex flex-col justify-center items-center pb-4">
        <PostCreate/>
        <div className="w-auto">
            <h1 className="bg-black w-full rounded py-2 px-24 text-white text-4xl mb-2 text-center ">Posts</h1>
            <PostList/>
        </div>
    </div>)
}

export default App;