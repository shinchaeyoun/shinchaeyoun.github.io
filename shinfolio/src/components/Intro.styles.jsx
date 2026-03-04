//Intro.styles
import styled from "styled-components";
import S from "../styles/GlobalBlock";
import media from "../styles/media.jsx";

const Wrap = styled(S.GridContainer)`
  margin-top:30px;
  // height: 100vh;
  gap: 20px;
  // height: 100%;
`;

const Block = styled(S.GridItem)`
  ${({ $type }) =>
    $type === "img" &&
    `
      height: 420px;
      background-image: url(./images/01.jpeg);
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    `}

  div {
    margin-top: 30px;
    &:first-child {
      margin-top: 0;
    }


    .tit {
      font-size: 16px;
      font-weight: 600;
    }

    &.title {
      font-size: 36px;
      font-family: ${({ theme }) => theme.paperlogy}, sans-serif;
    }

    span {
      margin-right: 10px;
    }
     ul {
      display: flex;
      ol {
        &:first-child {
          width: 20%;
          font-weight: 600;
        }
        &:last-child {width: 80%;}
      }
     }
  }
`;

const I = {
  Wrap,
  Block,
};

export default I;
