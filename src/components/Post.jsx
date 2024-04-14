import React from 'react';
import Draggable from 'react-draggable';
import ReactMarkdown from 'react-markdown'
import "../styles/note.scss"

const Post = (props) => {

  return (
    <div >
      <Draggable className="note"
      // handle=".move-icon" // this is for you to define, what part of the note do you want to drag by
      // grid={[5, 5]} // snapping to grid pixels
      // defaultPosition={{ x: 0, y: 0 }} // if no position given
      // position={{
      //   x: this.props.note.x, y: this.props.note.y, width: 200, height: 100,
      // }}
      // onStart={this.handleStartDrag}
      // onDrag={this.handleDrag}
      // onStop={this.handleStopDrag}
      >
        <div>
          {/* <h1 >{props.post.content || ""} </h1> */}
          <ReactMarkdown>{props.post.content || ""}</ReactMarkdown>

        </div>
      </Draggable>
    </div>
  )
}

export default Post