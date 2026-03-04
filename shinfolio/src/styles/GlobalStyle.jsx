import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');
  @font-face {
    font-family: Paperlogy;
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Outfit','Arial', sans-serif;
    background-color: #f0f0f0;
    color: #333;
    // line-height: 1.6;
  }
  h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
  }
  p {
    // margin-bottom: 1em;
  }
  a {
    color: #007bff;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }

  .frame {
  position: fixed;

  width: 100vw;
  height: 100vh;

  border: 20px solid #fff;

  z-index: 999;
  clip-path: polygon(
    0% 0%,
    0px 100%,
    22px 100%,
    22px 22px,
    calc(100vw - 22px) 22px,
    calc(100vw - 22px) calc(100vh - 22px),
    0% calc(100vh - 22px),
    0% 100%,
    100% 100%,
    100% 0%
  );

  .frame-inner {
    border: 2px solid #d0021b;
    width: 100%; height: 100%;
  }
}

`;

export default GlobalStyle;
