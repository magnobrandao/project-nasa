import React from 'react';

import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'



export default function App() {
  return (

    <ChakraProvider >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>)
}


