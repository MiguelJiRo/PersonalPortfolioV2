import "./sidebar.style.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faGears,
  faUserNinja,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import React from "react";
import logo from "../../../assets/images/logo.png";

export const SidebarComponent = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <nav className={showNav ? "mobile-show" : ""}>
        <Link className="logo" to="/" onClick={() => setShowNav(false)}>
          <img src={logo} alt="Logo" />
        </Link>
        <div>
          <NavLink
            className="home-link"
            to="/"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            className="about-link"
            to="/about"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faUserNinja} color="#4d4d4e" />
          </NavLink>
          <NavLink
            className="experience-link"
            to="/experience"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faGears} color="#4d4d4e" />
          </NavLink>
          <NavLink
            className="projects-link"
            to="/projects"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </NavLink>
          <NavLink
            className="contact-link"
            to="/contact"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
          <FontAwesomeIcon
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#cccccc"
            size="3x"
            className="close-icon"
          />
        </div>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/miguel-jiroz"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MiguelJiRo"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="https://t.me/Hisstrel" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faTelegram}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#cccccc"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  );
};
