import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import Navigation from "./components/header/Navigation";
import DisplayLayout from "./components/body/DisplayLayout";
import Footer from "./components/footer/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredComponent, setHoveredComponent] = useState("");

  const handleMenuChange = state => {
    setMenuOpen(state);
  };

  const currentHoveredComponent = component => {
    setHoveredComponent(component);
  };
  return (
    <Router>
      <div className="App">
        <Navigation
          onMenuChange={handleMenuChange}
          hoveredComponent={currentHoveredComponent}
        />
        <div className="App__container">
          <DisplayLayout
            navBarDisplayed={menuOpen}
            hoveredComponent={hoveredComponent}
          />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
