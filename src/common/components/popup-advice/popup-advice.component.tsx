import { NavLink } from "react-router-dom";
import "./popup-advice.style.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

interface Props {
  message: string;
  submessage: string;
  page: string;
}

export const PopupAdviceComponent: React.FunctionComponent<Props> = (props) => {
  const { message, submessage, page } = props;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    isOpen && (
      <div className={`popup-effect ${isOpen ? "open" : ""}`}>
        <div className="popup-container popup-box">
          <span>{message}</span>
          <NavLink className="nav-popup" to={`/${page}`}>
            <FontAwesomeIcon icon={faArrowRight} color="#cccccc" />
            <span> {submessage} </span>
          </NavLink>
        </div>
      </div>
    )
  );
};
