import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPost } from '../actions/postActions';
import Post from './Post';
import { Container } from '@chakra-ui/react';

const Bulletin = () => {

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.list);

  useEffect(() => {
    dispatch(fetchAllPost());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const postList = posts.map((post, index) => {
    return <Post key={index} post={post} />;
  });

  return (
    <div>
      <Container>
        <div className="window">
          <div className="postList">
            {postList}
          </div>
        </div>
      </Container>
    </div>
  )
}


export default Bulletin