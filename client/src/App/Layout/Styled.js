import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  font-family: "Lato", sans-serif;

  & section {
    user-select: text;
  }
`;

export default Container;
