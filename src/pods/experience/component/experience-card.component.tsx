import React, { useEffect, useRef, useState } from "react";
import "../experience.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Reveal } from "@/common/components/utils/reveal";

interface Props {
  title: string;
  duration: string;
  position: string;
  description: string;
  technologies?: string[];
  infohref?: string;
}

export const ExperienceCardComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { description, duration, position, technologies, title, infohref } =
    props;

  return (
    <div className="experience-card-container">
      <div className="exp-card-first-line">
        <Reveal>
          <span className="tag-color-vscode exp-card-title">
            {title}
            <span className="text-color-vscode">.</span>
          </span>
        </Reveal>
        <Reveal>
          <span className="symbol-color-vscode">{duration}</span>
        </Reveal>
      </div>
      <Reveal>
        <span className="symbol-color-vscode">{position}</span>
      </Reveal>
      <Reveal>
        <span className="text-color-vscode exp-card-description">
          {description}
        </span>
      </Reveal>
      <Reveal>
        {technologies ? (
          <div className="exp-card-technologies">
            {technologies.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        ) : (
          <div />
        )}
      </Reveal>
      <Reveal>
        {infohref ? (
          <a className="tag-color-vscode exp-card-more-info" href={infohref}>
            <FontAwesomeIcon icon={faInfoCircle} />
            More info
          </a>
        ) : (
          <div />
        )}
      </Reveal>
    </div>
  );
};
