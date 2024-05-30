import React, { useEffect, useRef, useState } from "react";
import "./projects.styles.scss";
import { ProjectCardComponent } from "./component/project-card.component";
import tfg from "../../assets/images/university.png";
import portfoliov1 from "../../assets/images/portfolio.png";
import masterlemoncode from "../../assets/images/masterlemoncode.png";
import portfoliov2 from "../../assets/images/portfoliov2.png";
import wario from "../../assets/images/wario.png";
import mario from "../../assets/images/mario.png";
import frogger from "../../assets/images/frogger.png";
import memorygame from "../../assets/images/memorygame.png";
import animesearch from "../../assets/images/animesearch.png";
import manfredexport from "../../assets/images/manfred-export.png";

export const ProjectsComponent = () => {
  return (
    <div className="projects-container" id="projects">
      <h1 className="tag-color-vscode">
        Projects<span className="text-color-vscode">.</span>
      </h1>
      <div className="project-cards-container">
      <ProjectCardComponent
          title={"Final Master’s Degree Project"}
          infohref={"https://github.com/Lemoncode/manfred-export-app"}
          technologies={["React", "Typescript", "EJS"]}
          description={"Collaboration on a task of the Manfred Export App. Review and correction of the templates and fields of the React application part."}
          imageSource={manfredexport}
        />
        <ProjectCardComponent
          title={"Personal portfolio v2"}
          infohref={"https://migueljiro.github.io/PersonalPortfolioV2"}
          technologies={["React", "Typescript", "SASS", "and more..."]}
          description={"New version of my personal portfolio."}
          imageSource={portfoliov2}
        />
        <ProjectCardComponent
          title={"Master Front-End Lemoncode"}
          infohref={
            "https://github.com/MiguelJiRo/Master-Frontend-XII-Lemoncode"
          }
          technologies={["React", "Angular", "and more..."]}
          description={"Exercises of the Lemoncode Frontend Master’s."}
          imageSource={masterlemoncode}
        />
        <ProjectCardComponent
          title={"Anime Search"}
          infohref={"https://github.com/MiguelJiRo/AnimeSearch"}
          technologies={["Angular", "Typescript", "SCSS", "HTML"]}
          description={
            "This application, from a URL of an image, will tell you the anime, the episode, and the exact moment of the scene in the image. Very useful for anime fans."
          }
          imageSource={animesearch}
        />
        <ProjectCardComponent
          title={"Personal portfolio v1"}
          infohref={"https://migueljiro.github.io/PersonalPortfolio"}
          technologies={["Angular", "Typescript", "SASS", "and more..."]}
          description={"First version of my personal portfolio."}
          imageSource={portfoliov1}
        />
        <ProjectCardComponent
          title={"Final degree project"}
          infohref={"https://github.com/MEMOGAMES2019"}
          technologies={["C#", "Unity"]}
          description={
            "Final degree project - Computer Science Engineering. This project consists of several serious games intended for people with cognitive deterioration such as dementia or Alzheimer."
          }
          imageSource={tfg}
        />
        <ProjectCardComponent
          title={"Wario Land 3 - DVI Project"}
          infohref={"https://github.com/MiguelJiRo/WarioLand2_dvi"}
          technologies={["JavaScript", "Html"]}
          description={
            "Final project for the course Video game development using web technologies."
          }
          imageSource={wario}
        />
        <ProjectCardComponent
          title={"Super Mario - DVI Project"}
          infohref={"https://github.com/MiguelJiRo/SuperMario"}
          technologies={["JavaScript", "Html"]}
          description={
            "Third practice of the course Video game development using web technologies. It’s not a big deal, but it’s cool. 🫣"
          }
          imageSource={mario}
        />
        <ProjectCardComponent
          title={"Frogger - DVI Project"}
          infohref={"https://github.com/MiguelJiRo/Frogger"}
          technologies={["JavaScript", "Html"]}
          description={
            "Second practice of the course Video game development using web technologies. A very typical and simple game, do you want to play a game?"
          }
          imageSource={frogger}
        />
        <ProjectCardComponent
          title={"Memory Game - DVI Project"}
          infohref={"https://github.com/MiguelJiRo/MemoryGame"}
          technologies={["JavaScript", "Html"]}
          description={
            "First practice of the course Video game development using web technologies."
          }
          imageSource={memorygame}
        />
      </div>
    </div>
  );
};
