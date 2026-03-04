import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import S from "../styles/GlobalBlock.jsx";

const Footer = () => {
  return (
    <S.Footer>
      <div>
        <p>
          <span>phone</span>010-9230-9218
        </p>
        <p>
          <span>E-Mail</span>8217shin@gmail.com
        </p>
      </div>

      <div>
        <p>Create with me</p>
        <p>
          <span>SHIN</span> CHAE YEUN
        </p>
      </div>
    </S.Footer>
  );
};

export default Footer;
