import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import S from "../styles/GlobalBlock.jsx";
import P from "./Projects.styles.jsx";
import data from "../data/projects.js";

const Projects = () => {
  return (
    <P.Wrap>
      {data.map((project, index) => (
        <P.GridItem key={index}>
          {/* <P.Block> */}
            <P.ImgBlock>
              <a href={project.link} target="_blank">
                <img src={project.thumnail} alt={project.title} />
              </a>
            </P.ImgBlock>
          {/* </P.Block> */}

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

          {/* <h2>{project.title}</h2>
          <p>{project.type}</p>
          <p>Language Used: {project.languageUsed}</p>
          <ul>
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          <p>Intent: {project.intent}</p>
          <p>Retrospective: {project.retrospective}</p> */}
        </P.GridItem>
      ))}
    </P.Wrap>
  );
};

export default Projects;
