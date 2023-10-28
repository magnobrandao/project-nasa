import React from 'react';

import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/home/Home';



export default function App() {
  return (

    <ChakraProvider >
      <Home />
    </ChakraProvider>)
}


