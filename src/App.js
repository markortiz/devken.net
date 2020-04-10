import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import "particles.js/particles.js";
import * as particlesConfig from "./assets/particlesjs-config.json";

function App() {
  useEffect(() => {
    console.log(particlesConfig.default);
    window.particlesJS("App-bg", particlesConfig.default, function() {
      console.log("callback - particles.js config loaded");
    });

    console.log("mounted");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, I'm Ken!</h1>
        <p>Senior Frontend Engineer</p>
        <section className="App-links">
          <a
            className="App-link"
            href="https://www.linkedin.com/in/mark-ortiz"
            target="_blank"
            title="LinkedIn"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
          <a
            className="App-link"
            href="https://github.com/markortiz"
            title="Git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github-square" aria-hidden="true"></i>
          </a>
          <a
            className="App-link"
            href="mailto:markkennethortiz@gmail.com"
            title="Email me"
          >
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </section>
      </header>
      <div id="App-bg" className="App-bg"></div>
    </div>
  );
}

export default App;
