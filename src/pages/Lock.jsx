import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/lock.scss"
import { Container, Text, Input, Button, InputGroup, Flex, Center, Box } from '@chakra-ui/react';


const Lock = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("")

  const handleLock = () => {
    console.log(password);
    if (password === "masala") {
      navigate("/home");
    }
  }
  return (
    <>

      <Box
        bgImage="url('https://upload.wikimedia.org/wikipedia/commons/e/e2/Animated_y2k_nightclub_floor.gif')"
        bgPosition="center"
        bgRepeat="no-repeat"
      >

        <Flex width={"100vw"} height={"100vh"} alignContent={"center"} justifyContent={"center"}>
          <Center>
            <Box bg="white" p="4" borderRadius="md" boxShadow="md">
              <Container>
                <Text>Please enter the password </Text>
                <InputGroup size='md'>
                  <Input mr="10px" type="text" onChange={(e) => setPassword(e.target.value)} />
                  <Button type="button" value="submit" onClick={() => handleLock()} > Unlock </Button>
                </InputGroup>
              </Container>
            </Box>
          </Center>
        </Flex>
      </Box>
    </>
  )
}

export default Lock