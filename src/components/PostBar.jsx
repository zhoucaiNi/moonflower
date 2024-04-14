import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/postActions';

const PostBar = () => {

  const dispatch = useDispatch();
  const [content, setContent] = useState("hey")

  const handleCreatePost = () => {
    console.log(content)
    dispatch(createPost({
      title: "",
      content: content,
    }));
  }

  return (
    <div className="window" id="note-bar">
      <div className="title-bar">
        <div className="title-bar-text"> Add notes here! </div>
      </div>

      <div className="window-body">
        <div className="field-row">
          <input
            id="text17"
            className="search-bar"
            type="text"
            placeholder="enter note title"
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="button" value="submit" onClick={() => handleCreatePost()} > Create New Note </button>
        </div>
      </div>
    </div>
  )
}

export default PostBar