//Career.styles
import styled from "styled-components";
import S from "../styles/GlobalBlock";
import media from "../styles/media.jsx";

const GridContainer = styled(S.GridContainer)`
  gap: 60px 20px;
`;

const GridItem = styled(S.GridItem)`
  .title {
    font-size: 16px;
    font-weight: 600;
  }

  .subTitle {
    // font-weight: 600;
    color: ${({ theme }) => theme.point};
  }
  .content {
    p {
      margin-top: 10px;
    }
  }
`;

const C = {
  GridContainer,
  GridItem,
};

export default C;
