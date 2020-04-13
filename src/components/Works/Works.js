import React from 'react';
// CSS
import './Works.css';

// Images
import reactGalleryAppSm from '../../assets/images/react-app-gallery_sm.png';

function Works() {
  return (
    <main className="Work">
      <h1 className="App-title red">Sample Work</h1>

      <a href="/react-gallery-app" className="Work-item row">
        <figure className="Work-figure col-xs-12 col-md-4">
          <img alt="React Gallery App"
            loading="lazy"
            src={reactGalleryAppSm}/>
        </figure>
        <article className="Work-description col-xs-12 col-md-8">
          <h2 className="Work-title red">React Gallery App</h2>
          <p>A sample gallery app that consume api from <strong><a className="red" href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash API</a></strong> that could search, inifinite scroll and have an advance search option. </p>
        </article>
      </a>
    </main>
  );
}

export default Works;