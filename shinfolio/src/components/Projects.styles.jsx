//Project.styles
import styled from "styled-components";
import S from "../styles/GlobalBlock";
import media from "../styles/media.jsx";

const Wrap = styled(S.Wrap)``;

const GridItem = styled(S.GridContainer)`
  grid-template-columns: 2fr 1fr;
  align-items: end;
  gap: 60px 20px;

  margin-bottom: 100px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Block = styled(S.GridItem)``;

const ImgBlock = styled(Block)`
  height: 460px;
  overflow-y: scroll;

  // transform: translateY(20px);
  // transition: 0.5s;
  // transition-delay: 0.5s;

  a {
    img {
      width: 100%;
    }
  }
`;

const ContentBlock = styled(Block)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .title {
    p {
      &:first-child {
        font-size: 24px;
        font-weight: 600;
      }
    }
  }

  .content {
    .subtitle {
      margin-top: 20px;
      font-weight: 600;
      color: ${({ theme }) => theme.point};
    }
  }
`;

const P = {
  Wrap,
  GridItem,
  Block,
  ImgBlock,
  ContentBlock,
};

export default P;
