import React from "react";
import illustration from "./Assets/Illustration-header.png";
import Github from "./Assets/github.svg";
import twitter from "./Assets/twitter.svg";
import medium from "./Assets/medium.svg";
import angel from "./Assets/angel list.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="icon-container">
        <img src={Github} alt="Github"/>
        <img src={medium} alt=""/>
        <img src={twitter} alt="twitter"/>
        <img src={angel} alt="angel"/>
      </div>


      <div className="hero-content">
        <h1>
          Hey There <br /> I'm Sahid
        </h1>

        <h2>I'm a Software Developer</h2>

        <p>
          I can help you build a product, feature or website. Look
          through some of my work and experience! If you like what
          you see and have a project you need coded, don't hesitate
          to contact me.
        </p>
      </div>

      <div>
        <img src={illustration} alt="Developer illustration" />
      </div>
    </section>
  );
}
