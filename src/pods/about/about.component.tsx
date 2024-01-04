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
import { Reveal } from "@/common/components";

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
            <Reveal>
              <p className="text-color-vscode">
                Hello, I'm{" "}
                <span className="tag-color-vscode text-bold">Miguel</span>, a
                passionate Front End Developer with over 2-3 years of experience
                in creating interactive and appealing user interfaces. I
                specialize in{" "}
                <span className="tag-color-vscode text-bold">Angular</span> or{" "}
                <span className="tag-color-vscode text-bold">React</span>.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-color-vscode">
                Throughout my career, I've worked on projects ranging from small
                web applications to large enterprise systems. My focus has
                always been on creating smooth and appealing user experiences
                that are both functional and aesthetically pleasing.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-color-vscode">
                I'm a constant learner, always looking for new technologies and
                better ways to solve problems. I strongly believe in teamwork
                and collaboration to achieve the best results.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-color-vscode">
                In my free time, I find myself drawn to the tranquility of
                nature, where I can appreciate its beauty and complexity. I also
                have a deep appreciation for art, as it allows me to explore
                different perspectives and expressions of creativity. My passion
                for history and mysticism often leads me on fascinating journeys
                into the past, unraveling the mysteries of ancient civilizations
                and their beliefs. The unknown and the mysterious captivate me,
                sparking my curiosity and fueling my desire to learn and
                explore. These activities not only enrich my knowledge but also
                provide a sense of fulfillment and joy.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-color-vscode">
                I'm always looking for new opportunities and challenges. I look
                forward to the opportunity to work with you! 😀
              </p>
            </Reveal>
          </div>
          <div className="about-right-container">
            <h2 className="tag-color-vscode">
              <FontAwesomeIcon icon={faSquareCaretRight} color="#cccccc" />{" "}
              Technologies i usually use
              <span className="text-color-vscode">.</span>
            </h2>
            <Reveal>
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
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
};
