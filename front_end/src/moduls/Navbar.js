import "./Navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () =>{

  return <div>

    <Link className="navbarLink" to="/LandingPage">Úvod</Link>
    <Link className="navbarLink" to="/Concerts">Concerty</Link>
    <Link className="navbarLink" to="/Discography">Diskografie</Link>
    <Link className="navbarLink" to="/Contacts">Kontakty</Link>

  </div>

}

export default Navbar