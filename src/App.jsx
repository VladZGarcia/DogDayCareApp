import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import Home from './components/Home'
import SingleDog from './components/SingleDog'




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
