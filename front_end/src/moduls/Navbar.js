import "./Navbar.css"
import { Link } from 'react-router-dom'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Navbar = () =>{
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const menuVisibility = () => {
      setMenuVisibility(!isMenuVisible);
  };

  return <div className="Navbar">
   <FontAwesomeIcon className="hamburger" onClick={ menuVisibility } icon={faBars} style={{color: "#ffffff"}} />
    <div className={`navLinks ${isMenuVisible ? 'menuIsVisible' : 'menuIsHidden'}`}>
    <Link className="navbarLink" to="/">Úvod</Link>
    <Link className="navbarLink" to="/Koncerts">Koncerty</Link>
    <Link className="navbarLink" to="/Discography">Diskografie</Link>
    <Link className="navbarLink" to="/Contacts">Kontakty</Link>
    </div>
   
  </div>

}

export default Navbar