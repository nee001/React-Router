import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'
import About from './components/About'
import User from './components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/><Home/></>
    },
    {
      path: "/services",
      element: <><Navbar/><Services/></>
    },
    {
      path: "/contact",
      element: <><Navbar/><Contact/></>
    },
    {
      path: "/about",
      element: <><Navbar/><About/></>
    },
    {
      path: "/user/:username",
      element: <><Navbar/><User/></>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
