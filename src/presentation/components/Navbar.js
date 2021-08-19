import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFan   } from '@fortawesome/free-solid-svg-icons'
import { faInstagram,faSpotify,faPatreon,faYoutube,faTiktok } from '@fortawesome/free-brands-svg-icons'
import Logo from "../assets/anda_logo.png"
const Navbar = () => {
  return(
      <nav>
              <div className="logo">
                    <a href="#">
                        <img className="logo" src={Logo}  alt={"ANDA Logo"}/>
                    </a>
              </div>
            <ul className="links">
                <li>
                    <a href="#">Artists</a>

                </li>
                <li>
                    <a href="">Producers</a>
                </li>
                <li>
                    <a href="">Press</a>
                </li>
                <li>
                    <a href="">Collaborators</a>
                </li>
                <li>
                    <a href="">Business enquiries</a>
                </li>
                <li>
                    <a href="">How to join?</a>
                </li>
            </ul>

          <ul style={{justifyContent:"space-between"}}>
              <li>
                  <a href="#">
                      <FontAwesomeIcon icon={faInstagram}/>
                  </a>
              </li>
              <li>
                  <a href="#">
                      <FontAwesomeIcon icon={faSpotify}/>
                  </a>
              </li>
              <li>
                  <a href="#">
                      <FontAwesomeIcon icon={faPatreon}/>
                  </a>
              </li>
              <li>
                  <a href="#">
                      <FontAwesomeIcon icon={faTiktok}/>
                  </a>
              </li>
              <li>
                  <a href="#">
                      <FontAwesomeIcon icon={faYoutube}/>
                  </a>
              </li>
          </ul>
      </nav>

  )
}

export default Navbar;