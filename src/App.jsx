import React from 'react'
import HomePage from "./pages/home/homePage"
import AboutUsPage from "./pages/aboutUs/aboutUsPage"
import PropertiesPage from "./pages/properties/propertiesPage"
import { Link, Route, Routes } from 'react-router-dom'






function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about-us" element={<AboutUsPage/>} />
        <Route path="/properties-page" element={<PropertiesPage/>} />
      </Routes>
    </>
  )
}

export default App
