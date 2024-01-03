import { routes } from "@/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./about.styles.scss";
import reactImg from "../../assets/images/react.png";
import typescriptImg from "../../assets/images/typescript.png";
import javascriptImg from "../../assets/images/javascript.png";
import cssImg from "../../assets/images/css.png";
import sassImg from "../../assets/images/sass.png";
import html5Img from "../../assets/images/html-5.png";
import javaImg from "../../assets/images/java.png";
import mysqlImg from "../../assets/images/mysql.png";
import githubImg from "../../assets/images/github.png";
import dockerImg from "../../assets/images/docker.png";
import angularImg from "../../assets/images/angular.png";
import springBootImg from "../../assets/images/spring-boot.png";
import jiraImg from "../../assets/images/jira.png";
import gitImg from "../../assets/images/git.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";

interface Props {}

export const AboutComponent: React.FC<Props> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="about-container">
        <h1 className="tag-color-vscode">
          About me<span className="text-color-vscode">.</span>
        </h1>
        <div className="about-main-container">
          <div className="about-left-container">
            <span className="text-color-vscode">
              Hello, I'm [Your Name], a passionate Front End Developer with over
              [number of years of experience] years of experience in creating
              interactive and appealing user interfaces. I specialize in
              [technologies you master, e.g., HTML, CSS, JavaScript, React,
              Vue.js, etc.].
            </span>
            <span className="text-color-vscode">
              Throughout my career, I've worked on projects ranging from small
              web applications to large enterprise systems. My focus has always
              been on creating smooth and appealing user experiences that are
              both functional and aesthetically pleasing.
            </span>
            <span className="text-color-vscode">
              I'm a constant learner, always looking for new technologies and
              better ways to solve problems. I strongly believe in teamwork and
              collaboration to achieve the best results.
            </span>
            <span className="text-color-vscode">
              In my free time, I enjoy [leisure activities, e.g., reading,
              coding for fun, running, etc.]. I'm always looking for new
              opportunities and challenges. I look forward to the opportunity to
              work with you!
            </span>
          </div>
          <div className="about-right-container">
            <h2 className="tag-color-vscode">
              <FontAwesomeIcon icon={faSquareCaretRight} color="#cccccc" />{" "}
              Technologies i usually use
              <span className="text-color-vscode">.</span>
            </h2>
            <div className="skills-container">
              <img src={reactImg} alt="reactImg" />
              <img src={angularImg} alt="angularImg" />
              <img src={typescriptImg} alt="typescriptImg" />
              <img src={javascriptImg} alt="javascriptImg" />
              <img src={cssImg} alt="cssImg" />
              <img src={sassImg} alt="sassImg" />
              <img src={html5Img} alt="html5Img" />
              <img src={dockerImg} alt="dockerImg" />
              <img src={githubImg} alt="githubImg" />
              <img src={gitImg} alt="gitImg" />
              <img src={jiraImg} alt="jiraImg" />
              <img src={javaImg} alt="javaImg" />
              <img src={springBootImg} alt="springBootImg" />
              <img src={mysqlImg} alt="mysqlImg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
