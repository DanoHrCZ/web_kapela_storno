import React from 'react'
import "./LandingPage.css"
//import modulů
import Navbar from "../../moduls/navbar/Navbar"
import Footer from "../../moduls/footer/Footer"
import SectionImgRight from "../../moduls/sections/SectionImgRight/SectionImgRight"
import FourPicture from "../../moduls/sections/FourPicture/FourPicture"
const LandingPage = () =>{
    return <div className="page">
    <Navbar></Navbar>
    <section >
    <SectionImgRight></SectionImgRight>
    <FourPicture></FourPicture>
    </section>
    <Footer></Footer>
    </div>
}

export default LandingPage