import React, { useEffect, useRef, useState } from "react";
import "./contact.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export const ContactComponent = () => {
  return (
    <div className="contact-container" id="contact">
      <h1 className="tag-color-vscode">
        Contact me<span className="text-color-vscode">.</span>
      </h1>
      <span className="text-color-vscode">
        Shoot me an email if you want to connect! 🙂
      </span>
      <a className="text-color-vscode" href="mailto:migueljiroz@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
        migueljiroz@gmail.com
      </a>
    </div>
  );
};
