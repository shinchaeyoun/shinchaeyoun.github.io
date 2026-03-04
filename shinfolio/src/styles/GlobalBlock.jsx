//GlobalBlock
import styled from "styled-components";
import media from "./media.jsx";

const Title = styled.h1``;
const SubTitle = styled.h2``;
const Description = styled.p``;
const ButtonWrap = styled.div``;
const Button = styled.button``;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  // grid-template-rows: repeat(auto-fill, minmax(50px, auto));
  grid-template-columns: 1fr 1fr;
`;

const GridItem = styled.div``;

const InnerFrame = styled.div`
  padding: 30px;

  display: grid;
  grid-template-columns: 150px 1fr;
`;

const Nav = styled.nav`
  font-size: 16px;
  font-weight: 600;
  > * {
    position: fixed;
  }

  .logo {
    font-size: 18px;
    line-height: 1;
    z-index: 999;
    // color: ${({ theme }) => theme.point};
  }

  ul {
    padding-top: 80px;
    li {
      &.active {
        position: relative;

        &::after {
          content: "";
          position: absolute;
          bottom: 2px;
          left: 0;

          width: 130%;
          height: 2px;

          background-color: ${({ theme }) => theme.point};
          z-index: -1;
        }
      }
    }
  }

  #arrow {
    bottom: 50px;
    left: calc(150px / 2 + 15px);
    width: 1px;
    height: 50px;
    background-color: #707070;

    &::after {
      content: "";
      position: absolute;
      width: 15px;
      height: 15px;
      border-top: 1px solid #707070;
      border-right: 1px solid #707070;
      transform: rotate(315deg) translate(-7px, -4px);
    }
  }
`;

const Main = styled.main`
  // height: 300vh;
`;

const Wrap = styled.div`
  margin-top:30px;
`;



const Footer = styled.footer`
  height: calc(100vh - 60px);

  // font-family: ${({ theme }) => theme.outfit}, sans-serif;

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-end;
  // height: 100%;


  div {
    font-size: 16px;
    &:first-child {
      span {
        margin-right: 10px;
        font-weight: 600;
      }
    }
    &:last-child {
      font-size: 64px;
      font-weight: 800;
      p:last-child {
        font-size: 84px;
        span {
          display: block;
          margin-bottom: -30px;
        }
      }
    }
  }
`;

const S = {
  Title,
  SubTitle,
  Description,
  ButtonWrap,
  Button,
  GridContainer,
  InnerFrame,
  Nav,
  Main,
  Wrap,
  GridItem,
  Footer,
};

export default S;
