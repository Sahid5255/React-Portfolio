import React from "react";

import imgPlaceholder from "./Assets/Img Placeholder.png";
import imgPlaceholder1 from "./Assets/Img Placeholder (1).png";
import imgPlaceholder2 from "./Assets/Img Placeholder (2).png";
import MaskGroup from "./Assets/Mask Group.png";

const featuredProject = {
  title: "Multi-Post Stories",
  description:
    "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard dummy text ever since the 1500s.",
  tags: ["CSS", "HTML", "Bootstrap", "Ruby"],
  cta: "See Project",
};

const projects = [
  {
    title: "Professional Art Printing",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ["HTML", "Bootstrap", "Ruby"],
    cta: "See Project",
    image: imgPlaceholder1,
  },

  {
    title: "Data Dashboard Healthcare",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ["HTML", "Bootstrap", "Ruby"],
    cta: "See Project",
    image: imgPlaceholder2,
  },

  {
    title: "Website Portfolio",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ["HTML", "Bootstrap", "Ruby"],
    cta: "See Project",
    image: MaskGroup,
  },

  {
    title: "Professional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ["HTML", "Bootstrap", "Ruby"],
    cta: "See Project",
    image: imgPlaceholder1,
  },

  {
    title: "Data Dashboard Healthcare",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ["HTML", "Bootstrap", "Ruby"],
    cta: "See Project",
    image: imgPlaceholder2,
  },

  {
    title: "Website Portfolio",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ["HTML", "Bootstrap", "Ruby"],
    cta: "See Project",
    image: MaskGroup,
  },
];

function Tag({ children, onDark }) {
  return (
    <span className={onDark ? "tag tag--on-dark" : "tag"}>
      {children}
    </span>
  );
}

function FeaturedCard({ project }) {
  return (
    <div className="featured-card">

      <img
        src={imgPlaceholder}
        alt={project.title}
        className="featured-card__image"
      />

      <div className="featured-card__body">

        <h3 className="featured-card__title">
          {project.title}
        </h3>

        <p className="featured-card__description">
          {project.description}
        </p>

        <div className="featured-card__tags">

          {project.tags.map((tag) => (
            <Tag key={tag}>
              {tag}
            </Tag>
          ))}

        </div>

        <button className="btn-primary">
          {project.cta}
        </button>

      </div>

    </div>
  );
}

function ProjectCard({ project, index }) {

  // First card = image only
  const isFirstCard = index === 0;

  return (
    <div
      className={`project-card ${
        isFirstCard ? "project-card--image-only" : ""
      }`}
      style={{
        backgroundImage: `url("${project.image}")`,
      }}
    >


      {!isFirstCard && (
        <>
          {/* Dark overlay */}
          <div className="project-card__scrim"></div>


          {/* Card content */}
          <div className="project-card__content">

            <h4 className="project-card__title">
              {project.title}
            </h4>


            <p className="project-card__description">
              {project.description}
            </p>


            <div className="project-card__tags">

              {project.tags.map((tag) => (
                <Tag
                  key={tag}
                  onDark
                >
                  {tag}
                </Tag>
              ))}

            </div>


            {project.cta && (
              <button className="btn-primary btn-primary--small">
                {project.cta}
              </button>
            )}

          </div>
        </>
      )}

    </div>
  );
}

export default function Herosection() {

  return (

    <section className="recent-works">

      <div className="recent-works__heading">

        <h2 className="recent-works__heading-title">
          My Recent Works
        </h2>

        <div className="recent-works__heading-rule"></div>

      </div>

      <div>
        <FeaturedCard
          project={featuredProject}
        />
      </div>

      <div className="project-grid">

        {projects.map((project, index) => (

          <ProjectCard
            key={index}
            project={project}
            index={index}
          />

        ))}

      </div>


    </section>

  );
}