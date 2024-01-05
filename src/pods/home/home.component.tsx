import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.styles.scss";
import { NumbersColumnComponent, Reveal } from "@/common/components";

export const HomeComponent = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Front End developer ❤️", "Full Stack developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <div className="home-container">
        <div className="home-container-center">
          <Reveal>
            <span className="text-color-vscode home-container-maintitle">
              Hey, I'm Miguel<span className="tag-color-vscode">.</span>
            </span>
          </Reveal>
          <Reveal>
            <span className="symbol-color-vscode home-container-title">
              I'm a{" "}
              <span className="tag-color-vscode">Front-End Developer</span>
            </span>
          </Reveal>
          <Reveal>
            <span className="symbol-color-vscode home-container-subtitle">
              Computer Science Engineer who loves to create apps and games
              <span className="text-color-vscode">.</span>
            </span>
          </Reveal>
          <Reveal>
            <a className="button-connect">Let’s Connect </a>
          </Reveal>
        </div>
      </div>
    </>
  );
};
