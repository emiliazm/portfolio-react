import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope, faHome, faSuitcase, faUser, faBars, faClose, faGear,
} from '@fortawesome/free-solid-svg-icons';
import { faAngellist, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import LogoSubtitleGreen from '../../assets/images/logo_sub_green.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import LogoS from '../../assets/images/logo-e.png';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">

      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="emilia" />
        <img className="sub-logo-green" src={LogoSubtitleGreen} alt="emilia" />
      </Link>

      <nav className={showNav ? 'mobile-show' : 'nav-desk'}>
        <div className="menu">
          <NavLink
            onClick={() => setShowNav(false)}
            exact="true"
            activeclassname="active"
            className="home-link"
            to="/home"
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>

          <NavLink
            onClick={() => setShowNav(false)}
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink
            onClick={() => setShowNav(false)}
            exact="true"
            activeclassname="active"
            className="skills-link"
            to="/skills"
          >
            <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
          </NavLink>

          <NavLink
            onClick={() => setShowNav(false)}
            exact="true"
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
          >
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </NavLink>

          <NavLink
            onClick={() => setShowNav(false)}
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>

          <FontAwesomeIcon
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#9E958B"
            size="3x"
            className="close-icon"
          />
        </div>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/emiliazm/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/emiliazm"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://angel.co/u/emiliazm"
            >
              <FontAwesomeIcon icon={faAngellist} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </nav>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#9E958B"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  );
};

export default Sidebar;
