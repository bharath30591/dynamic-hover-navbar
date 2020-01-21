import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AppBar.scss";

export default function NavigationBar(props) {
  const [showNavigation, setShowNavigation] = useState(props.showNavBar);
  function handleMenuClick(e) {
    e.preventDefault();
    setShowNavigation(!showNavigation);
    props.toggle(!showNavigation);
  }
  return (
    <div className="appBar">
      <h1>
        <div className="appBar__title">
          <Link to="/">Website Name</Link>
        </div>
      </h1>
      <div className="appBar__button" onClick={handleMenuClick}>
        <i className="fas fa-bars"></i>
      </div>
    </div>
  );
}
