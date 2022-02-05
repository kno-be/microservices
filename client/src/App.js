import React from "react";
import './index.css'
import PostCreate from './components/PostCreate'

const App = () => {
    return (
    <div className="bg-slate-600 w-full flex flex-col justify-center items-center">
        <PostCreate/>
    </div>)
}

export default App;