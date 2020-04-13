import React from "react";
// CSS
import "./Works.css";

function Works() {
  return (
    <main className="Work">
      <h1 className="App-title red">Sample Work</h1>

      <a href="#animals" className="Work-item row">
        <figure className="Work-figure col-xs-12 col-md-4">
          <img src="https://placeimg.com/640/480/animals" alt="Animals"  />
        </figure>
        <article className="Work-description col-xs-12 col-md-8">
          <h2 className="Work-title red">Google Chrome</h2>
          <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
        </article>
      </a>
    </main>
  );
}

export default Works;