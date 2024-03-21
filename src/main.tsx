import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Header from './Components/Header/index.tsx'
import Subheader from './Components/SubHeader/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <Header/>
    <Subheader/>
    <h1 className="title2">O que a Salesforce oferece?</h1>
    
  </React.StrictMode>,
)
