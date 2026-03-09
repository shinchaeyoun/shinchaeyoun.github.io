import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import S from "../styles/GlobalBlock.jsx";
import P from "./Projects.styles.jsx";
import data from "../data/projects.js";

const Projects = () => {
  const handleImgBlockClick = () => {
    console.log("Image block clicked");
  };
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    const imgBlock = document.querySelectorAll(".imgBlock")[hoveredIndex];
    if (imgBlock) {
      imgBlock.scrollTop = 0;
    }
    setHoveredIndex(null);
  };

  const handleMouseOverScroll = (index) => {
    if (hoveredIndex === index) {
      const imgBlock = document.querySelectorAll(".imgBlock")[index];
      if (imgBlock) {
        imgBlock.scrollTop += 3; // Adjust the scroll speed as needed
      }
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredIndex !== null) {
        handleMouseOverScroll(hoveredIndex);
      }
    }, 50); // Adjust the interval time as needed
    return () => clearInterval(interval);
  }, [hoveredIndex]);

  return (
    <P.Wrap>
      {data.map((project, index) => (
        <P.GridItem key={index}>
          <P.ImgBlock
            className="imgBlock"
            // onTouchMove={handleImgBlockClick}
            // onMouseEnter={() => handleMouseEnter(index)}
            // onMouseLeave={handleMouseLeave}
            // style={{
            //   cursor: hoveredIndex === index ? "pointer" : "default",
            //   opacity: hoveredIndex === index ? 1 : 0.9,
            //   transition: "all 0.3s ease",
            //   // transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
            // }}
          >
            <a href={project.link} target="_blank">
              <img src={project.thumnail} alt={project.title} />
            </a>
          </P.ImgBlock>

          <P.ContentBlock>
            <div className="title">
              <p>{project.title}</p>
              <p>{project.type}</p>
            </div>

            <div className="content">
              <div className="subtitle">사용언어</div>
              <p>{project.languageUsed}</p>

              <div className="subtitle">사용기능</div>
              <ul>
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <div className="subtitle">기획의도</div>
              <p>{project.intent}</p>

              <div className="subtitle">제작후기</div>
              <p>{project.retrospective}</p>
            </div>
          </P.ContentBlock>
        </P.GridItem>
      ))}
    </P.Wrap>
  );
};

export default Projects;
