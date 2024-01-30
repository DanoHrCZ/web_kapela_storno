import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

//import Komponent
const Navbar = () =>{
    return <>
    <Link className="navbarLink" to="/LandingPage">Úvod</Link>
    <Link className="navbarLink" to="/Concerts">Concerty</Link>
    <Link className="navbarLink" to="/Discography">Diskografie</Link>
    <Link className="navbarLink" to="/Contacts">Kontakty</Link>
    </>
}

export default Navbar