import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/lock.scss"
import { Container, Text, Input, Button, InputGroup, Flex, Center } from '@chakra-ui/react';


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
      <Flex width={"100vw"} height={"100vh"} alignContent={"center"} justifyContent={"center"}>
        <Center>
          <Container>
            <Text>Please enter the password </Text>
            <InputGroup size='md'>
              <Input type="text" onChange={(e) => setPassword(e.target.value)} />
              <Button type="button" value="submit" onClick={() => handleLock()} > Unlock </Button>
            </InputGroup>
          </Container>
        </Center>
      </Flex>
    </>
  )
}

export default Lock