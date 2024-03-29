import React from 'react'

const PostBar = () => {
  return (
    <div className="window" id="note-bar">
      <div className="title-bar">
        <div className="title-bar-text"> Add notes! </div>
      </div>

      <div className="window-body">
        <div className="field-row">
          <input
            id="text17"
            className="search-bar"
            type="text"
            placeholder="enter note title"
          />
          <button type="button" value="submit"> Create New Note </button>
        </div>
      </div>
    </div>
  )
}

export default PostBar