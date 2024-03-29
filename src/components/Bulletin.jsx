import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPost } from '../actions/postActions';
import Post from './Post';

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
      <div className="window">
        <div className="postList">
          {postList}
        </div>
      </div>
    </div>
  )
}


export default Bulletin