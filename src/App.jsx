import { useState } from 'react'
import Home from './Components/Home';
import './App.css'
import Navbar from './Components/Navbar'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Reviews from './Components/Reviews';
import Projects from './Components/Projects';
import { ToastContainer } from 'react-toastify';
import Landingpage from './Components/Landingpage';

function App() {
  const route = createBrowserRouter([
    {
    path: "/",
    element: <Landingpage/>
    },
    {
    path: "/about",
    element: <><Navbar/><About/></>
    },
    {
    path: "/project",
    element: <><Navbar/><Projects/></>
    },
    {
    path: "/contact",
    element: <><Navbar/><Contact/></>
    },
    {
    path: "/reviews",
    element: <><Navbar/><Reviews/></>
    },
  ])
  return (
    <>
    <ToastContainer/>
    <RouterProvider router={route}/>
    </>
  )
}

export default App
