import React from "react";
import Frame from "./Assets/Frame.png";

const languages = ["JavaScript", "Ruby", "HTML", "CSS"];
const frameworks = ["React.js", "Ruby on Rails", "RSpec", "Capybara", "Selenium"];
const skills = ["Database Management", "Version Control", "CLI", "Web Development"];

function ListColumn({ title, items, markerClass }) {
  return (
    <div className="about-list">
      <h4 className="about-list__title">
        <span className={`about-list__marker ${markerClass}`} />
        {title}
      </h4>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__top">
        <div className="about-me__content">
          <h2 className="about-me__title">About me</h2>
          <p className="about-me__description">
            I'm a software developer! I can help you build a product, feature
            or website. Look through some of my work and experience! If you
            like what you see and have a project you need coded don't
            hesitate to contact me
          </p>
          <button className="btn-primary">Get My Resume</button>
        </div>

        <div className="about-me__image">
         <img src={Frame} alt="About illustration" /> 
        </div>
      </div>

      <div className="about-me__rule" />

      <div className="about-me__lists">
        <ListColumn title="Languages" items={languages} markerClass="about-list__marker--diamond" />
        <ListColumn title="Frameworks" items={frameworks} markerClass="about-list__marker--square" />
        <ListColumn title="Skills" items={skills} markerClass="about-list__marker--dot" />
      </div>
    </section>
  );
}