import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar(props) {
  const [currentComponent, setCurrentComponent] = useState("");
  const handleHover = (e, hoveredComponent) => {
    e.preventDefault();
    if (currentComponent === hoveredComponent) return;
    setCurrentComponent(hoveredComponent);
    props.currentHoveredComponent(hoveredComponent);
  };
  return (
    <nav className={`nav-menu ${props.showNavBar && "nav-menu--open"} `}>
      <div id="nav-home" className="nav-menu__item">
        <em>
          <Link
            to="/"
            className="link link--page nuxt-link-exact-active nuxt-link-active"
            onMouseEnter={e => handleHover(e, "home")}
          >
            Home
          </Link>
        </em>
      </div>
      <div id="nav-features" className="nav-menu__item">
        <em>
          <Link
            to="/features"
            className="link link--page"
            onMouseEnter={e => handleHover(e, "features")}
          >
            Features
          </Link>
        </em>
      </div>
      <div id="nav-support" className="nav-menu__item">
        <em>
          <Link
            to="/support"
            rel="noopener noreferrer"
            target="_blank"
            className="link link--page"
            onMouseEnter={e => handleHover(e, "support")}
          >
            Support
          </Link>
        </em>
      </div>
      <div id="nav-releases" className="nav-menu__item">
        <em>
          <a
            href="https://github.com/agalwood/Motrix/releases"
            rel="noopener noreferrer"
            target="_blank"
            className="link link--page"
            onMouseEnter={e => handleHover(e, "release")}
          >
            Releases
          </a>
        </em>
      </div>
      <div id="nav-about" className="nav-menu__item">
        <em>
          <a
            href="/about"
            className="link link--page"
            onMouseEnter={e => handleHover(e, "about")}
          >
            About
          </a>
        </em>
      </div>
      <div id="nav-license" className="nav-menu__item">
        <em>
          <a
            href="/license"
            className="link link--page"
            onMouseEnter={e => handleHover(e, "license")}
          >
            License
          </a>
        </em>
      </div>
    </nav>
  );
}
