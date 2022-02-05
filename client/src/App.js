import React from "react";
import './index.css'
import PostCreate from './components/PostCreate'
import PostList from "./components/PostList";

const App = () => {
    return (
    <div className="bg-slate-600 w-full flex flex-col justify-center items-center">
        <PostCreate/>
        <PostList/>
    </div>)
}

export default App;