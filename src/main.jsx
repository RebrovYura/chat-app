import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from './context/AuthContext'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { ChatContextProvider } from './context/ChatContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
)
