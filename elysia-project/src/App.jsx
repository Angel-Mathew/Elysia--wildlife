import React from "react";
import "./App.css";
//import react from "react";
//import css from "./App.css";

function App() {
  const[glow, setGlow] = React.useState(""); // State to track which link is glowing
  return (// code for the header section
    <>
    <header className="header">
      {/* Logo + ribbon group */}
      <div className="logo-box">
        <img src="/elysia.png" alt="Elysia Logo" className="logo" />
        <img src="/design (2).png" alt="Elysia " className="ribbon" />
        <span className="name">Elysia</span> 
      </div>

      {/* Navigation */}
      <nav>
        <a
          href="#Categories"
          className={glow === "#Categories" ? "glow" : ""}// Apply glow class when the link is clicked
          onClick={() => setGlow("#Categories")}
        >
          🐾 Categories
        </a>
        <a
          href="#MyJourney"
          className={glow === "#MyJourney" ? "glow" : ""} // Apply glow class when the link is clicked
          onClick={() => setGlow("#MyJourney")}
        >
          🐾 My Journey
        </a>
        <a
          href="#Sightings"
          className={glow === "#Sightings" ? "glow" : ""} // Apply glow class when the link is clicked
          onClick={() => setGlow("#Sightings")}
        >
          🐾 Sightings
        </a>
      </nav>

      {/* Gold peel in top-right */}
      <img src="/gold.png" alt="Gold Corner" className="gold" />
    </header>

    {/* Main content area */}
  <main>
  {/* Intro Section with Image + Text + Button */}
  <section id="intro">
    <img src="/mainbg.png" alt="Main Content" className="main_image" />
    
    <div className="intro-box">
      <div className="introduction">
       On the other side of the universe, the sounds of songs and roars.
Freedom soars through the sky, where whispers of nature and an unknown 
language are spoken by creatures — 
  understood only by the creator.
So, the creator formed a bridge between the human and natural worlds — 
a place where they can meet and speak through emotion and action.
      </div>
      <button className="welcome">welcome to wildlife</button>
    </div>
  </section>

  {/* ABOUT Label Section */}
  <div className="label-container">
    <img src="/label.png" alt="Label" className="label-img" />
    <span className="label-text">ABOUT</span>
    <img src="/bird.png" alt="Bird" className="bird" />
    <img src="/about.png" alt="about" className="about" />
  
    <p className="about-text">             Welcome to Elysia. 
Here you can explore information about various animals, birds, reptiles, and fish, 
and even discover zoos, sanctuaries, or wildlife tourism spots where you can meet 
them face-to-face. You can also share your own safari trips in 'My Journey'. 
Note: You can post anything related to wildlife.</p>
  </div>
  {/* Categories */}
  <section id="Categories">
     <div className="label-container2">
       <img src="/label.png" alt="Label" className="label2" />
    <span className="label-text2">Categories </span>
    <img src="/rabbit.png" alt="rabbit" className="rabbit" />
     </div>
     {/*button for each categories */}
     <div className="categories">
       <div className="category">
      <img
        src="/prints (4).png"
        alt="Animals"
        className="category-btn"
        onClick={() => window.location.href = "/animals"}
      />
      <span>Animals</span>
    </div>
    <div className="category">
      <img
        src="/prints (3).png"
        alt="Birds"
        className="category-btn"
        onClick={() => window.location.href = "/birds"}
      />
      <span>Birds</span>
    </div>
    <div className="category">
      <img
        src="/prints (2).png"
        alt="Reptiles"
        className="category-btn"
        onClick={() => window.location.href = "/reptiles"}
      />
      <span>Reptiles</span>
    </div>
    <div className="category">
      <img
        src="/prints (1).png"
        alt="Fish"
        className="category-btn"
        onClick={() => window.location.href = "/fish"}
      />
      <span>Fish</span>
    </div>
  </div>
  </section>
    


</main>

</>
  );
}

export default App;
