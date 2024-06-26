import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lock from "./pages/Lock";
// import { Login } from "./pages/Login";
// import Usernav from "./componenets/Usernav";
// import { AuthContext } from './context/AuthContext';
// import { useContext } from 'react';
// import Header from "./componenets/Header";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // const { currentUser } = useContext(AuthContext);
  return (
    <ChakraProvider>
      <BrowserRouter>
        {/* {currentUser ? <Usernav /> : <Header />} */}
        <Routes>
          <Route path="/">
            <Route index element={<Lock />} />
            <Route path="home" element={<Home />} />
            {/* <Route path="signup" element={<Register />} /> */}
            {/* <Route path="profile/:id" element={<Profile />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
