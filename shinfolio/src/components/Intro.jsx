import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import S from "../styles/GlobalBlock.jsx";
import I from "./Intro.styles.jsx";

const Intro = () => {
  return (
    <I.Wrap>
      <I.Block $type="img">images</I.Block>
      <I.Block $type="desc">
        <div className="title">
          디자인을 이해하는 개발자,
          <br />
          개발을 이해하는 퍼블리셔.
          <br />
          신채연입니다.
        </div>

        <div class="introduce">
          <p>
            안녕하세요 퍼블리셔 신채연입니다. 웹 퍼블리싱을 공부하며, 단순
            디자인만이 중요한것이 UI 디자인과 사용자를 위한 설계, 추구하고자
            하는 목표를 웹 표준, 웹 접근성, 크로스 브라우징, 시멘틱 마크업
            원칙에 맞추어 정확하게 담아내는 것이 중요하다는 것을 배울 수
            있었습니다.
          </p>
        </div>

        <div class="profile">
          <div class="tit">Profile</div>
          <ul>
            <ol>
              <li>이름</li>
              <li>생년월일</li>
              <li>주소</li>
              <li>연락처</li>
              <li>이메일</li>
            </ol>
            <ol>
              <li>신채연</li>
              <li>1998.02.17</li>
              <li>서울시 강서구</li>
              <li>010-9230-9218</li>
              <li>8217shin@gmail.com</li>
            </ol>
          </ul>
        </div>

        <div class="skills">
          <div class="tit">Skills</div>
          <span>HTML</span> <span>CSS</span> <span>SCSS</span>
          <span>javascript</span> <span>jQuery</span>
          <span>photoshop</span> <span>illustrator</span>
          <span>figma</span> <span>XD</span>
          <span>vue</span> <span>react</span>
        </div>

        <div class="licens">
          <div class="tit">Licens</div>

          <ul>
            <ol>
              <li>2015</li>
              <li>2013</li>
              <li>2013</li>
            </ol>
            <ol>
              <li>컴퓨터그래픽스운용기능사</li>
              <li>gtq 그래픽기술자격2급</li>
              <li>gtq 일러스트2급</li>
            </ol>
          </ul>
        </div>
      </I.Block>
    </I.Wrap>
  );
};

export default Intro;
