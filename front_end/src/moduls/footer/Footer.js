import "./Footer.css"
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'

import { faYoutube, faInstagram, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () =>{

    return <>
    <footer>
      <div className="footerLinks">
        <div className="footerSocial">
          <a href="#" target='blank'>
            <div>
              <FontAwesomeIcon icon={faSpotify} ></FontAwesomeIcon>
            </div>
          </a>
          <a href="https://www.instagram.com/kapela_storno/" target='blank'>
            <div>
              <FontAwesomeIcon icon={faInstagram} ></FontAwesomeIcon>
            </div>
          </a>
          <a href="https://www.youtube.com/channel/UChrzCWwToDX0ZSZkXoJgkjw" target='blank'>
            <div>
              <FontAwesomeIcon icon={faYoutube} ></FontAwesomeIcon>
            </div>
          </a>
        </div>
        <div>
          <p>&copy; Daniel Hrečin</p>
          <p>&copy; kapela Storno</p>
        </div>
        <div>
        <p>kapela.storno@gmail.com</p>
        </div>
    <div className={"footerLinks"}>
    <Link className="footerLink" to="/">Úvod</Link>
    <Link className="footerLink" to="/Koncerts">Koncerty</Link>
    <Link className="footerLink" to="/Discography">Diskografie</Link>
    <Link className="footerLink" to="/Contacts">Kontakty</Link>
    </div>
    </div>
</footer>
</>
}

export default Footer