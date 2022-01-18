import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = extendTheme({
  fonts: {
    heading: "monospace",
    body: "monospace"

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
