import React, { useState } from "react";
import AppBar from "./AppBar";
import NavBar from "./NavBar";

export default function Navigation(props) {
  const [showNavBar, setShowNavBar] = useState(false);

  const toggleNavBar = state => {
    setShowNavBar(state);
    props.onMenuChange(state);
  };

  const handleHoveredComponent = component => {
    props.hoveredComponent(component);
  };

  return (
    <div>
      <header>
        <AppBar toggle={toggleNavBar} state={showNavBar} />
      </header>
      <NavBar
        showNavBar={showNavBar}
        currentHoveredComponent={handleHoveredComponent}
      />
    </div>
  );
}
