import React, { useEffect, useRef, useState } from "react";
import "./experience.styles.scss";
import { ExperienceCardComponent } from "./component/experience-card.component";

export const ExperienceComponent = () => {
  return (
    <div className="experience-container" id="experience">
      <h1 className="tag-color-vscode">
        Experience<span className="text-color-vscode">.</span>
      </h1>
      <div className="experience-cards-container">
        <ExperienceCardComponent
          title={"Master Front-End Lemoncode"}
          duration={"April 2022 - Nov 2023"}
          position={"Master Front-End Lemoncode XIII Edicion"}
          description={
            "The Lemoncode Master’s program is a comprehensive course focusing on modern Front End technologies. It provides hands-on learning, taught by industry professionals, to equip students with up-to-date web development skills."
          }
          infohref="https://lemoncode.net/master-frontend#inicio-banner"
          technologies={[
            "React",
            "Angular",
            "Vuejs",
            "Svelte",
            "d3js",
            "Flexbox",
            "CSS Grid",
            "Material Design",
            "CSS",
            "SASS",
            "NextJS",
            "Jest",
            "GraphQL",
            "Webpack",
            "Vite",
            "Parcel",
            "ES6",
            "Typescript",
            "Git",
            "TDD",
            "Jest",
            "React Testing Library",
            "Jest+Typescript",
            "AWS",
            "Azure",
          ]}
        />
        <ExperienceCardComponent
          title={"Indra"}
          duration={"Jan 2022 - Present"}
          position={"Frontend Developer - Fullstack Developer"}
          description={"Project - strategic command and control system."}
          technologies={[
            "Angular",
            "Typescript",
            "Html5",
            "CSS3",
            "SASS",
            "Java",
            "Spring",
            "Docker",
            "VSCode",
            "Jira",
            "Git",
            "TDD",
            "Jest",
            "Angular Testing Library",
            "Jest+Typescript",
          ]}
        />
        <ExperienceCardComponent
          title={"Indra"}
          duration={"Feb 2021 - Jan 2022"}
          position={"Backend Developer"}
          description={"Project - mission planner system."}
          technologies={["Java", "Spring", "Intellij", "Jira", "Git"]}
        />
        <ExperienceCardComponent
          title={"Computer Science Engineering"}
          duration={"2014 - 2020"}
          position={"Student - Complutense University of Madrid"}
          description={
            "Computer Engineering is the science and technology of the design, implementation, and maintenance of the software and hardware components that make up modern computer systems. It is solidly grounded in theories and principles of computing, mathematics, physics, and engineering, and applies all of them to the resolution of technical problems that require the development of software, hardware, and network architectures that present a balance between different opposing requirements and objectives."
          }
          infohref="https://informatica.ucm.es/data/cont/docs/titulaciones/1909.pdf"
        />
        <ExperienceCardComponent
          title={"Computer Engineering"}
          duration={"2012 - 2014"}
          position={"Student - Complutense University of Madrid"}
          description={
            "In computer engineering, one participates in many aspects of hardware and software development, from the design of individual microcontrollers, microprocessors, personal computers, and supercomputers to the design of specific software for these platforms. I was in this degree for 2 years before switching to Computer Science Engineering"
          }
          infohref="https://www.ucm.es/data/cont/docs/titulaciones/1912.pdf"
        />
        <ExperienceCardComponent
          title={"Baccalaureate in Sciences and Technology"}
          duration={"2009 - 2011"}
          position={"Student"}
          description={
            "This program offers a curriculum with a focus on sciences and technology. It provides students with a strong foundation in various scientific disciplines and technological principles."
          }
        />
      </div>
    </div>
  );
};
