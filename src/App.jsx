import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/home/homePage"
import AboutUsPage from "./pages/aboutUs/aboutUsPage"
import PropertiesPage from "./pages/properties/propertiesPage"
import ServicesPage from "./pages/services/servicesPage"






function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about-us" element={<AboutUsPage/>} />
        <Route path="/properties-page" element={<PropertiesPage/>} />
        <Route path="/services-page" element={<ServicesPage/>} />
      </Routes>
    </>
  )
}

export default App