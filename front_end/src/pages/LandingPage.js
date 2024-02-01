import React from 'react'
import { Link } from 'react-router-dom'
//import modulů
import Navbar from "../moduls/Navbar"
import Footer from "../moduls/Footer"
const LandingPage = () =>{
    return <div className="page">
    <Navbar></Navbar>
    
    <Footer></Footer>
    </div>
}

export default LandingPage