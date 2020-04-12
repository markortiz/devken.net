import React from "react";
import "./assets/css/normalizer.css";
import "./assets/css/flexboxgrid.css";
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
          <nav className="App-menu">
            <a className="link active" href="#">Home</a>
            <a className="link" href="#">My Works</a>
          </nav>
        </header>
        <main className="App-main">
          <h1 className="App-title red">Hi there! <span className="">I’m Ken,</span></h1>
          <p>A Frontend Engineer with {yearsOfExperience()} years of professional experience.</p>
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
          </p>
          <ul>
            <li>I write Clean Code so humans can understand it</li>
            <li>Pushing performant code</li>
            <li>Writing slick tests</li>
            <li>Composing demos using Storybook</li>
            <li>Automating boring and repetitive stuff</li>
            <li>CI and CD </li>
          </ul>
          <p>
            You can visit my <strong><a className="red" href="https://github.com/markortiz" target="_blank">Github</a></strong> if you wanna know what else I'm doing.
            Or you can also reach me at my <strong><a className="red" href="https://www.linkedin.com/in/mark-ortiz/" target="_blank">LinkedIn</a></strong> and <strong><a className="red" href="mailto:markkennethortiz@gmail.com">markkennethortiz@gmail.com</a></strong>.
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
