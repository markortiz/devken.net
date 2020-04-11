import React from "react";
import "./App.css";

function App() {

  const yearsOfExperience = () => {
    const date = new Date();
    const year = date.getFullYear();
    const startingYear = 2012;
    return year-startingYear;
  }

  return (
    <div className="App">
      <div className="App-wrapper">
        <header className="App-header">
          <h1 className="App-title red">Hi there! <span className="">I’m Ken,</span></h1>
        </header>
        <main className="App-main">
          <p>a Frontend Engineer with {yearsOfExperience()} years of professional experience.</p>
          <p>I started coding when I was 15, creating CSS templates for my social media account, and that’s when I got hooked into coding. </p>
          <p>Currently, I’m developing small to large scale applications like as simple as landing pages to extensive and complex applications using modern web technologies such as:</p>
          <ul>
            <li>Web Components</li>
            <li>Progressive Web App</li>
            <li>Progressive Web App</li>
            <li>React</li>
            <li>React Native</li>
            <li>Redux</li>
            <li>Polymer</li>
            <li>LIT Html</li>
          </ul>
          <p>I’m always fascinated by micro-services and micro-frontends architecture for complex applications where I use containerization technologies such as Docker and Kubernetes</p>
          <p>
            A big fan of:
            <ul>
              <li>I write Clean Code so humans can understand it</li>
              <li>Pushing performant code</li>
              <li>Writing slick tests</li>
              <li>Composing demos using Storybook</li>
              <li>Automating boring and repetitive stuff</li>
              <li>CI and CD </li>
            </ul>
          </p>
          <p>
            And oh, did I mention that I’m also trying to be a Fullstack Javascript developer?
            If you wanna hire me, just reach me at my email 
            <strong> <a class="red" href="mailto:markkennethortiz@gmail.com">markkennethortiz@gmail.com</a></strong>.
          </p>
        </main>
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
      </div>
    </div>
  );
}

export default App;
