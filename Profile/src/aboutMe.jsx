import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <AboutMe />
    </div>
  );
}

const AboutMe = () => {
  return (
    <div className="about-me">
      <img className="rectangle" alt="Rectangle" src="rectangle-2.png" />
      <p className="my-name-is-zizile">
        My name is Zizile Ngcem, I'm a young and motivated software developer intern with a strong desire to
        transform innovative ideas into tangible digital solutions. Currently, I am pursuing a degree in IRM at
        Unisa. The opportunity of embarking on this internship journey excites me as it presents a chance to refine my
        skills and contribute to advanced projects.
    
      </p>
      <div className="overlap-group">
        <a href="#read-more" className="text-wrapper">Read more</a>
      </div>
      {/* ... (existing images) ... */}
    </div>
  );
};

export default App;
