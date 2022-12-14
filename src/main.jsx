import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { ContextProvider } from './Context/QuizContext'
import App from './App'
import './CSS/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </ContextProvider>
)
