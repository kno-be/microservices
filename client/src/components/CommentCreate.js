import React from "react";

const CommentCreate = ({ postID }) => {
  return (
    <form>
      <input
        className="self-left my-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="comment"
        type="text"
        placeholder="New comment..."
      ></input>
      <button
        className="w-min self-left bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default CommentCreate;