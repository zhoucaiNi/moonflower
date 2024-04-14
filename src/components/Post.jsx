import React from 'react';
import Draggable from 'react-draggable';
import ReactMarkdown from 'react-markdown'

const Post = (props) => {

  return (
    <div className="post">
      <Draggable
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
        <h1 >{props.post.content || ""} </h1>
        <ReactMarkdown> {props.post.content || ""} </ReactMarkdown>
      </Draggable>
    </div>
  )
}

export default Post