import React from 'react'
import HomePage from "./pages/home/homePage"
import { Link, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </>
  )
}

export default App
