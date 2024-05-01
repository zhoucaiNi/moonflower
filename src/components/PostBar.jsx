import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/postActions';
import { Box, Button, Input, InputGroup, Text } from '@chakra-ui/react';

const PostBar = () => {

  const dispatch = useDispatch();
  const [content, setContent] = useState("")

  const handleCreatePost = () => {
    try {
      dispatch(createPost({
        title: "",
        content: content,
      }));

    } catch (e) {
      console.log(e)
    }

    setContent("");
  }

  return (
    <Box mb="40px" mt="20px" className="window" id="note-bar">
      <Text>Write your note here</Text>
      <InputGroup size='md'>
        <Input
          id="text17"
          type="text"
          placeholder="enter note title"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="button" value="submit" onClick={() => handleCreatePost()} > Create </Button>
      </InputGroup>
    </Box>
  )
}

export default PostBar