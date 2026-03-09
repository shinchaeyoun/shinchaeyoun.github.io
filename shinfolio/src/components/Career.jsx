import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import S from "../styles/GlobalBlock.jsx";

import C from "./Career.styles.jsx";

import data from "../data/career.js";

const Career = () => {
  return (
    <S.Wrap>
      <C.GridContainer>
        {data.map((item, index) => (
          <C.GridItem key={index}>
            <div className="title">
              <p>{item.company}</p>
            </div>
            <div className="subTitle">
              <p>
                {item.position} {item.date}
              </p>
            </div>
            <div className="content">
              <p>
                대표 사업으로 디지털 교과서 사업을 진행하면서 콘텐츠의 접근성과
                질에 대한 고려가 필수적이라는 것을 알게 되었습니다. 사용자
                경험을 향상시키는 것에 대해 더욱 고민하게 되며 사용자들이
                원활하고 효과적으로 학습할 수 있는 환경을 만들 수 있도록 배울 수
                있었습니다.
              </p>
            </div>
          </C.GridItem>
        ))}
      </C.GridContainer>
    </S.Wrap>
  );
};

export default Career;
