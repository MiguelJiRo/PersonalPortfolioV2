import React, { useEffect, useRef, useState } from "react";
import "../projects.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Reveal } from "@/common/components/utils/reveal";
interface Props {
  imageSource: string;
  title: string;
  infohref: string;
  technologies: string[];
  description: string;
}

export const ProjectCardComponent: React.FunctionComponent<Props> = (props) => {
  const { imageSource, title, infohref, technologies, description } = props;

  return (
    <div className="project-card-container">
      <div className="project-card-image">
        <Reveal>
          <img src={imageSource} alt={title} />
        </Reveal>
      </div>
      <div className="project-card-first-line">
        <Reveal>
          <span className="tag-color-vscode project-card-title">
            {title}
            <span className="text-color-vscode">.</span>
          </span>
        </Reveal>
        <Reveal>
          <a
            className="text-color-vscode project-card-more-info"
            href={infohref}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Reveal>
      </div>
      <Reveal>
        <div className="project-card-technologies">
          {technologies.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </Reveal>
      <Reveal>
        <span className="text-color-vscode project-card-description">
          {description}
        </span>
      </Reveal>
      <Reveal>
        <div>
          <a
            className="tag-color-vscode project-card-learn-more"
            href={infohref}
          >
            Learn more
          </a>
        </div>
      </Reveal>
    </div>
  );
};
