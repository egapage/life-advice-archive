import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App';

const theme = extendTheme({
  fonts: {
    heading: "monospace",
    body: "monospace"
  },
  colors: {
    gray: {
      300: "#dadada"
    }
  },
  styles: {
    global: {
      body: {
        bg: '#1c1e25',
        color: '#dadada',
      },
      a: {
        color: 'white.',
        _hover: {
          textDecoration: 'underline',
        },
      },

    },
  },
  breakpoints: {
    sm: "500px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
  
})

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
