import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Support from "./pages/Support";
import Release from "./pages/Release";
import License from "./pages/License";

import "./DisplayLayout.scss";

export default function DisplayLayout(props) {
  const [displayedComponent, setDisplayedComponent] = useState(<Home />);
  const [displayedComponentName, setDisplayedComponentName] = useState(
    props.hoveredComponent
  );

  useEffect(() => {
    if (
      typeof props.hoveredComponent !== "undefined" &&
      props.hoveredComponent !== displayedComponentName
    ) {
      console.log(props.hoveredComponent);
      switch (props.hoveredComponent) {
        case "home":
          setDisplayedComponent(<Home />);
          setDisplayedComponentName("home");
          break;
        case "features":
          setDisplayedComponent(<Features />);
          setDisplayedComponentName("features");
          break;
        case "support":
          setDisplayedComponent(<Support />);
          setDisplayedComponentName("support");
          break;
        case "release":
          setDisplayedComponent(<Release />);
          setDisplayedComponentName("release");
          break;
        case "about":
          setDisplayedComponent(<About />);
          setDisplayedComponentName("about");
          break;
        case "license":
          setDisplayedComponent(<License />);
          setDisplayedComponentName("license");
          break;
        default:
          setDisplayedComponent(<Home />);
          setDisplayedComponentName("home");
          break;
      }
    }
  }, [displayedComponent, props.hoveredComponent, displayedComponentName]);

  const handlePageOnClick = (e, hoveredComponentName) => {
    console.log(`Inside DisplayLayout : ${hoveredComponentName}`);
    console.log(props.router);
    return <Redirect to={`/${hoveredComponentName}`} push />;
  };

  return (
    <div
      className={`pages-stack ${props.navBarDisplayed && "pages-stack--open"}`}
    >
      <div
        className="page page-one page--active"
        onClick={e => handlePageOnClick(e, displayedComponentName)}
      >
        {props.navBarDisplayed ? (
          displayedComponent
        ) : (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/features">
              <Features />
            </Route>
            <Route path="/support">
              <Support />
            </Route>
            <Route path="/release">
              <Release />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/license">
              <License />
            </Route>
          </Switch>
        )}
      </div>
      <div className="page page-two page--inactive"></div>
      <div className="page page-three page--inactive"></div>
    </div>
  );
}
