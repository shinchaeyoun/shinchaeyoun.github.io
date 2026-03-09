import { css } from "styled-components";

const sizes = {
  mbl: 480,
  tab: 768,
  desk: 1020,
  deskL: 1280,
  deskXL: 1440,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (first, ...args) => {
    if (typeof first === "string" || Array.isArray(first)) {
      return css`
        @media screen and (min-width: ${sizes[label]}px) {
          ${css(first, ...args)};
        }
      `;
    }
    return ""; // 안전 장치 추가
  };
  console.log('acc',acc);
  
  return acc;
}, {});

export default media;