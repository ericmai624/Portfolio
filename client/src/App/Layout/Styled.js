import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-family: "Lato", sans-serif;
  transition: opacity 1s ease-in-out;

  & section {
    user-select: text;
  }
`;

export default Container;
