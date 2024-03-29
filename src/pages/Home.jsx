import React from 'react'
import "../styles/style.scss"
// import { useNavigate } from 'react-router-dom'
import Bulletin from '../components/Bulletin'
import PostBar from '../components/PostBar'

export const Home = () => {
  // const navigate = useNavigate();

  return (
    <div className='homeContainer'>
      <h1> Zhoucai &amp; Helen's Bulletin Board &lt;3 </h1>
      <PostBar />
      <Bulletin />
    </div>
  )


}

export default Home;
