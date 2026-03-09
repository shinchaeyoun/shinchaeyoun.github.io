import { Link } from "react-router-dom";

const projectsData = [
  {
    link: "https://shinchaeyoun.github.io/eigenhain/index.html",
    thumnail: "./images/project/eigenhain_fullpage.png",
    title: "Eigenhain",
    type: "클론사이트",
    languageUsed: "HTML, CSS, JavaScript",
    features: [
      "API를 이용한 슬라이드 구성",
      "CSS marquee를 활용한 텍스트 흐름 구현"
    ],
    intent:
      "심플하면서 눈에 쉽게 들어오는 다양한 구성에 끌려 클론 사이트로 선정했습니다. 최대한 원본 페이지를 정확하게 구현할 수 있도록 집중하였으며, 정적인 이미지에 애니메이션을 넣어 시선이 머무르고 페이지를 즐길 수 있도록 수정하였습니다.",
    retrospective:
      "첫번째 프로젝트라 제작기간이 길어졌지만 슬라이드 API를 사용하여 손쉽게 퀄리티 높은 슬라이드를 구성할 수 있었습니다. 처음으로 완성시킨 프로젝라 더욱 집중하여 만들어 보았습니다. 제작기간은 9일 소요되었습니다."
  }
];

export default projectsData;