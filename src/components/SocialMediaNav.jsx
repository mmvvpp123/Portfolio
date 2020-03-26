import React from "react"
import "../styles/socialmedianav.css"
import { FaGithub, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa"

const SocialmediaNav = () => {
  return (
    <footer>
      <ul>
        <li>
          <a target="_blank" href="https://instagram.com/sherzodnimatullo">
            <FaInstagram size="2em" color="#1c1c1c" />
          </a>
        </li>
        <li>
          <a target="_blank" href="http://twitter.com">
            <FaTwitter size="2em" color="#1c1c1c" />
          </a>
        </li>
        <li>
          <a target="_blank" href="http://github.com/mmvvpp123">
            <FaGithub size="2em" color="#1c1c1c" />
          </a>
        </li>
        <li>
          <a target="_blank" href="mailto:sherzodnimatullo@turtle.nyc">
            <FaEnvelope size="2em" color="#1c1c1c" />
          </a>
        </li>
      </ul>
      <a target="_blank" href="https://josh8.com">
        Stay Connected
      </a>
    </footer>
  )
}

export default SocialmediaNav