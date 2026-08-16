import React from "react";
import illustration from "./Assets/Illustration-header.png";
import Github from "./Assets/github.svg";
import twitter from "./Assets/twitter.svg";
import medium from "./Assets/medium.svg";
import angel from "./Assets/angel list.svg";

export default function Hero() {
  const socials = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Sahid5255/React-Portfolio",
    },
    {
      icon: twitter,
      label: "Twitter",
      href: "https://twitter.com/your-username",
    },
    {
      icon: angel,
      label: "AngelList",
      href: "https://angel.co/u/your-username",
    },
    {
      icon: medium,
      label: "Medium",
      href: "https://medium.com/@your-username",
    },
  ];

  return (
    <section className="hero">
      <div className="hero__container">

        {/* Social icons - desktop */}
        <div className="hero__rail">
          {socials.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hero__icon-link"
            >
              <img
                src={icon}
                alt={label}
                className="hero__icon"
              />
            </a>
          ))}
        </div>

        {/* Text content */}
        <div className="hero__content">
          <h1 className="hero__title">
            Hey There.
            <br />
            I'm Sahid.
          </h1>

          <h2 className="hero__subtitle">
            I'm a Software Developer
          </h2>

          <p className="hero__description">
            I can help you build a product, feature or website.
            Look through some of my work and experience! If you
            like what you see and have a project you need coded,
            don't hesitate to contact me.
          </p>

          {/* Social icons - mobile/tablet */}
          <div className="hero__rail hero__rail--mobile">
            {socials.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hero__icon-link"
              >
                <img
                  src={icon}
                  alt={label}
                  className="hero__icon"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="hero__illustration-wrap">
          <img
            src={illustration}
            alt="Illustration of Victory's workspace"
            className="hero__illustration"
            draggable="false"
          />
        </div>

      </div>
    </section>
  );
}