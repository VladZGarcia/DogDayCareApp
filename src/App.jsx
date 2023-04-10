import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Routes>
    <Route path="/" element={<Welcome />}></Route>
    <Route path="/:home" element={<Home />}></Route>
    <Route pathe="/:name" element={<SingleDog />}></Route>
   </Routes>
   </>
  )
}

export default App
