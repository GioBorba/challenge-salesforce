import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Pages/Home/index.tsx'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CRM from './Pages/Produto-CRM/index.tsx'
import Empresa from './Pages/Empresa/index.tsx'
import Cadastro from './Pages/Cadastro/index.tsx'
import Login from './Pages/Login/index.tsx'
import SC from './Pages/Produto-SC/index.tsx'
import Equipe from './Pages/Equipe/index.tsx'
import MC from './Pages/Produto-MC/index.tsx'



const router = createBrowserRouter([
  
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/empresa",
    element:<Empresa/>
  },
  {
    path: "/cadastro",
    element: <Cadastro/>
  },
  {
    path: "/produto-servicecloud",
    element: <SC/>
  },
  {
    path:"/equipe",
    element:<Equipe/>
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path: "/produto-marketingcloud",
    element: <MC/>
  },
  {
    path: "produto-crm",
    element: <CRM/>
  }
  
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);