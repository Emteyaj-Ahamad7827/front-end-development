import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Signup } from './Components/Signup'
import {Navbar} from './Components/Navbar';
import {AllRoutes} from './Routes/AllRoutes'

function App() {
  

  return (
    <>
    <Signup />
    <Navbar />
    <AllRoutes />
    </>
  )
}

export default App
export  {App}