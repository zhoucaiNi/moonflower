import React from 'react'
import "../styles/style.scss"
// import { useNavigate } from 'react-router-dom'
import Bulletin from '../components/Bulletin'
import PostBar from '../components/PostBar'
import { Container } from '@chakra-ui/react'

export const Home = () => {
  // const navigate = useNavigate();
  return (
    <div className='homeContainer'>
      <Container>
        <PostBar />
        <Container >
          <Bulletin />
        </Container>
      </Container>
    </div >
  )


}

export default Home;
