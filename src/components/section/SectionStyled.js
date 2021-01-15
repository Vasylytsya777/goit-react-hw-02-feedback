import styled from "styled-components";

const Sect = styled.section`
  &:not(:last-child) {
    margin-bottom: 50px;
  }
  .title {
    margin-bottom: 25px;
    font-size: 26px;
    text-align: center;
  }
`;

export default Sect;
