import React from 'react'
import HeaderComponent from '../../components/Header/index'
import { Link, Route, Routes } from "react-router-dom";



const aboutUs = () => {
  return (
    <div>
      <HeaderComponent />
        <img src="./src/images/householding.png" width={610} height={435} />
    </div>
  )
}

export default aboutUs


