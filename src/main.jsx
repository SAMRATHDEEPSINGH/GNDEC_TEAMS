import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import EditUser from './components/EditUser/EditUser.jsx'
import About from './components/AboutUs/About.jsx'
import SideBar from './components/SideBar/SideBar.jsx'
import Login from './components/Login/Login.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/login' element={<App/>}></Route>
    <Route path='/' element={<SideBar/>}>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/edituser' element={<EditUser/>}/>
    <Route path='/about' element={<About/>}/>
   </Route>
   </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
